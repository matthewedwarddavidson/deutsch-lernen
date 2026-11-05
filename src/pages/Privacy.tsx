import { Link } from 'react-router'

export function Privacy() {
  return (
    <div className="page narrow prose">
      <header className="page-header">
        <h1>Privacy</h1>
        <p>What this app stores about you, and how to delete it.</p>
      </header>

      <h2>If you don't sign in</h2>
      <p>
        Your progress, writing, words and settings are saved only in this browser, on this device. None of it is sent to
        the app's database.
      </p>

      <h2>If you sign in with Google</h2>
      <p>So your progress follows you between devices, the app stores:</p>
      <ul>
        <li>
          <strong>Your Google account details:</strong> name, email address, profile photo link, and when you signed up
          and last signed in.
        </li>
        <li>
          <strong>A copy of everything the app saves:</strong> your review history, the words you've learned or added,
          mistakes, your writing, exam results and settings, including the name you entered for the greeting.
        </li>
      </ul>
      <p>
        These are kept in Google Firebase, on servers in London. Only you can see your copy in the app. The app's owner
        can see the list of accounts and the stored data through Firebase's admin console, and doesn't use them for
        anything except running the app.
      </p>

      <h2>What the app doesn't do</h2>
      <p>
        No adverts, no analytics and no tracking cookies. Your data isn't sold or shared. Fonts and the built-in
        recordings are served from this site.
      </p>

      <h2>Other services</h2>
      <ul>
        <li>
          The app is hosted on GitHub Pages, which logs visitors' IP addresses for security (see{' '}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            GitHub's privacy statement
          </a>
          ).
        </li>
        <li>
          Signing in uses Google's sign-in, covered by{' '}
          <a href="https://policies.google.com/privacy">Google's privacy policy</a>.
        </li>
        <li>
          If you choose one of your browser's own voices, some of them (for example the online voices in Chrome and
          Edge) send the text being read aloud to the browser's maker.
        </li>
        <li>Links to dictionaries, news and other sites are only followed when you click them.</li>
      </ul>

      <h2>How long it's kept, and deleting it</h2>
      <p>
        Your data is kept until you delete it. In <Link to="/settings">Settings</Link>,{' '}
        <strong>Delete all progress</strong> clears your progress here and in the synced copy, but keeps your settings
        and account. <strong>Delete my account and data</strong> removes your account and everything stored about you.
      </p>

      <p className="faint small">Last updated 5 November 2026.</p>
    </div>
  )
}
