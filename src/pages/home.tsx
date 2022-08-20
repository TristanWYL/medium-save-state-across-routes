import { Link } from "react-router-dom";

export const HomePage = () => (
  <div>
    <ul>
      <li>
        <Link to="/state-mgmt">State Management</Link>
      </li>
      <li>
        <Link to="/context">Context</Link>
      </li>
      <li>
        <Link to="/url">URL</Link>
      </li>
      <li>
        <Link to="/link-state">Link State</Link>
      </li>
    </ul>
  </div>
);
