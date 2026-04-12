// Server component — renders a blocking inline script that sets the dark class
// on <html> before React hydrates, preventing flash of wrong theme.
export default function ThemeScript() {
  const script = `
    (function() {
      var stored = localStorage.getItem('lerko96-dark-mode');
      var dark = stored === null ? true : stored === 'true';
      if (dark) document.documentElement.classList.add('dark');
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
