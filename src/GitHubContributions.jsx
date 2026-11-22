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
  const [hovered, setHovered] = useState(null);
  function showDay(day, element) {
    const rect = element.getBoundingClientRect();
    setHovered({ date: day.date, count: day.count, x: Math.max(110, Math.min(window.innerWidth - 110, rect.left + rect.width / 2)), y: Math.max(45, rect.top) });
  }

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
      <div className="contributions-scroll" role="region" aria-label="GitHub contribution calendar" tabIndex={0} onScroll={() => setHovered(null)}>
        <div className="contributions-layout">
          <div className="contribution-weekdays" aria-hidden="true"><span/><span>Mon</span><span/><span>Wed</span><span/><span>Fri</span><span/></div>
          <div className="contribution-graph">
            <div className="contribution-months" style={{ gridTemplateColumns: `repeat(${calendar.weeks.length}, var(--contribution-size))` }} aria-hidden="true">
              {calendar.months.map(({ label, column }) => <span key={column} style={{ gridColumn: column + 1 }}>{label}</span>)}
            </div>
            <div className="contribution-weeks" role="group" aria-label={`${calendar.total} GitHub contributions over the past year`}>
              {calendar.weeks.map((week, i) => <div className="contribution-week" key={i}>
                {week.map((day, j) => day ? <button type="button" key={j} className={`contribution-day contribution-day-interactive contribution-level-${day.level}`} aria-label={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`} onMouseEnter={event => showDay(day, event.currentTarget)} onMouseLeave={() => setHovered(null)} onFocus={event => showDay(day, event.currentTarget)} onBlur={() => setHovered(null)} onClick={event => { if (hovered?.date === day.date) setHovered(null); else showDay(day, event.currentTarget); }} /> : <span key={j} className="contribution-day contribution-empty" aria-hidden="true" />)}
              </div>)}
            </div>
          </div>
        </div>
      </div>
      {hovered && <div className="contribution-tooltip" role="status" style={{left: hovered.x, top: hovered.y}}>{hovered.count} contribution{hovered.count === 1 ? '' : 's'} on {new Date(`${hovered.date}T12:00:00Z`).toLocaleDateString('en-US', {weekday:'short', month:'short', day:'numeric', year:'numeric', timeZone:'UTC'})}</div>}
      <div className="contribution-legend" aria-hidden="true">Less {[0, 1, 2, 3, 4].map(level => <span key={level} className={`contribution-day contribution-level-${level}`}/>)} More</div>
    </>}
    {useFallback && (fallbackFailed ? <p className="contribution-message">Contribution data is temporarily unavailable. <a href={GITHUB_URL} target="_blank" rel="noreferrer">View activity directly on GitHub</a>.</p> : <a className="contribution-fallback" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="View contributions on GitHub"><img src={`https://ghchart.rshah.org/777777/${USERNAME}`} alt="GitHub contribution calendar" onError={() => setFallbackFailed(true)}/></a>)}
    <p className="contribution-source">Activity on <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github.com/{USERNAME} ↗</a></p>
  </div>;
}