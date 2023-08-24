import Github from './Github';

function Footer() {
  return (
    <footer>
      <Github username="choiruladamm" />
      <a
        href="https://rawg.io/apidocs"
        target="_blank"
        rel="noopener noreferrer"
        className="Button"
      >
        RAWG API
      </a>
    </footer>
  );
}

export default Footer;
