import { useEffect, useMemo, useState } from 'react';

const USERNAME = 'SohamxP';
const GITHUB_URL = `https://github.com/${USERNAME}`;
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function buildCalendar(contributions) {
  const validDays = contributions
    .filter(day => /^\d{4}-\d{2}-\d{2}$/.test(day?.date) && Number.isFinite(day?.count))
    .sort((a, b) => a.date.localeCompare(b.date));
  if (!validDays.length) return null;

  const first = new Date(`${validDays[0].date}T00:00:00Z`);
  const last = new Date(`${validDays[validDays.length - 1].date}T00:00:00Z`);
  const start = Date.UTC(first.getUTCFullYear(), first.getUTCMonth(), first.getUTCDate() - first.getUTCDay());
  const end = Date.UTC(last.getUTCFullYear(), last.getUTCMonth(), last.getUTCDate() + 6 - last.getUTCDay());
  const count = Math.floor((end - start) / WEEK_MS) + 1;
  const weeks = Array.from({ length: count }, () => Array(7).fill(null));
  const months = [];

  for (const day of validDays) {
    const when = Date.parse(`${day.date}T00:00:00Z`);
    const column = Math.floor((when - start) / WEEK_MS);
    const row = new Date(when).getUTCDay();
    const level = Math.max(0, Math.min(4, Number(day.level) || 0));
    if (column >= 0 && column < count) weeks[column][row] = { ...day, level };
  }

  let lastMonth = '';
  for (let col = 0; col < count; col++) {
    const sunday = new Date(start + col * WEEK_MS);
    const monthKey = `${sunday.getUTCFullYear()}-${sunday.getUTCMonth()}`;
    if (monthKey !== lastMonth) {
      months.push({ label: MONTH_NAMES[sunday.getUTCMonth()], column: col });
      lastMonth = monthKey;
    }
  }

  return { weeks, months, total: validDays.reduce((sum, day) => sum + day.count, 0) };
}

export default function GitHubContributions() {
  const [state, setState] = useState({ status: 'loading', days: [] });
  const [fallbackFailed, setFallbackFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(CONTRIBUTIONS_URL, { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Contribution service unavailable'); return response.json(); })
      .then(data => {
        if (!Array.isArray(data?.contributions) || !data.contributions.length) throw new Error('No contribution data');
        setState({ status: 'loaded', days: data.contributions });
      })
      .catch(error => { if (error.name !== 'AbortError') setState({ status: 'fallback', days: [] }); });
    return () => controller.abort();
  }, []);

  const calendar = useMemo(() => buildCalendar(state.days), [state.days]);
  const useFallback = state.status === 'fallback' || (state.status === 'loaded' && !calendar);

  return <div className="contributions-card">
    {state.status === 'loading' && <p className="contribution-message" role="status">Loading GitHub contribution activity…</p>}
    {calendar && <>
      <p className="contribution-total">{calendar.total.toLocaleString('en-US')} contributions in the past year</p>
      <div className="contributions-scroll" role="region" aria-label="GitHub contribution calendar" tabIndex={0}>
        <div className="contributions-layout">
          <div className="contribution-weekdays" aria-hidden="true"><span/><span>Mon</span><span/><span>Wed</span><span/><span>Fri</span><span/></div>
          <div className="contribution-graph">
            <div className="contribution-months" style={{ gridTemplateColumns: `repeat(${calendar.weeks.length}, var(--contribution-size))` }} aria-hidden="true">
              {calendar.months.map(({ label, column }) => <span key={column} style={{ gridColumn: column + 1 }}>{label}</span>)}
            </div>
            <div className="contribution-weeks" role="img" aria-label={`${calendar.total} GitHub contributions over the past year`}>
              {calendar.weeks.map((week, i) => <div className="contribution-week" key={i}>
                {week.map((day, j) => <span key={j} className={`contribution-day ${day ? `contribution-level-${day.level}` : 'contribution-empty'}`} aria-hidden="true" title={day ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}` : undefined}/>)}
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="contribution-legend" aria-hidden="true">Less {[0, 1, 2, 3, 4].map(level => <span key={level} className={`contribution-day contribution-level-${level}`}/>)} More</div>
    </>}
    {useFallback && (fallbackFailed ? <p className="contribution-message">Contribution data is temporarily unavailable. <a href={GITHUB_URL} target="_blank" rel="noreferrer">View activity directly on GitHub</a>.</p> : <a className="contribution-fallback" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="View contributions on GitHub"><img src={`https://ghchart.rshah.org/40c463/${USERNAME}`} alt="GitHub contribution calendar" onError={() => setFallbackFailed(true)}/></a>)}
    <p className="contribution-source">Activity on <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github.com/{USERNAME} ↗</a></p>
  </div>;
}