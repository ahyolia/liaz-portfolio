export const metadata = {
  title: 'Legal notice and privacy — Camélia Amin Handoyo',
  description: "Legal notice and privacy policy of Camélia Amin Handoyo's portfolio.",
  alternates: { languages: { fr: '/mentions-legales/' } },
};

export default function Page() {
  return (
    <main id="contenu">
      <section className="section" aria-labelledby="titre-page">
        <div className="container stack legal" style={{ '--flow': 'var(--space-l)' }}>
          <div className="stack" style={{ '--flow': 'var(--space-2xs)' }}>
            <h1 id="titre-page">Legal notice</h1>
            <p className="annotation">Updated in November 2026</p>
          </div>

          <div className="receipt-wrap">
            <div className="receipt stack">
              <h2 className="receipt__title">Publisher</h2>
              <p>This website is the personal, non-commercial portfolio of Camélia Amin Handoyo, a BUT MMI student in Nouméa (New Caledonia), who is also its publication director.</p>
              <p>To contact her, write to <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a>.</p>

              <hr />
              <h2 className="receipt__title">Hosting</h2>
              <p>The website is hosted by Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, United States (<a href="https://www.netlify.com/">netlify.com</a>).</p>

              <hr />
              <h2 className="receipt__title">Intellectual property</h2>
              <p>The texts, visuals and projects shown here belong to their author unless stated otherwise. Any reproduction without prior consent is prohibited.</p>
              <p>Team projects are shown with the agreement of their members, who are credited on each case study. Projects carried out during internships or work-study (Lagoon, Lagoon Business, Tenjity, ASSNC) are shown as examples of my work. Their brands, logos and content remain the property of these companies.</p>
              <p>The logos of the tools and software mentioned belong to their publishers. The 3D models, images and cards used in some school projects (Unity Asset Store, Poly Pizza, Pokémon cards through the TCGdex API) remain the property of their authors and are only used to illustrate these projects.</p>

              <hr />
              <h2 className="receipt__title">External links</h2>
              <p>The website links to other sites (LinkedIn, GitHub, Behance, Figma, YouTube, company websites). I am not responsible for their content or their privacy policies.</p>
            </div>
          </div>

          <h2 id="confidentialite">Privacy policy</h2>
          <div className="notebook stack">
            <h3>What the website does not do</h3>
            <p>The website sets no cookies, uses no analytics tools and contains no forms. It therefore does not collect any personal data on its own.</p>
            <p>If you turn on the sound with the menu button, that choice is simply remembered in your browser (local storage). It is never sent anywhere, and you can erase it by clearing the site's data.</p>

            <h3>Third-party services</h3>
            <p>Fonts are loaded from Google Fonts, which sends your IP address to Google when pages are displayed.</p>
            <p>YouTube videos only load if you click on them, from the youtube-nocookie.com domain. Once playback starts, YouTube may set its own cookies.</p>
            <p>The host, Netlify, may keep technical connection logs (IP address, date, requested page) to keep the service secure and running properly.</p>

            <h3>If you write to me</h3>
            <p>If you contact me by email, I only use your address and message to reply to you. I never share them with anyone and I delete them once they are no longer needed.</p>

            <h3>Your rights</h3>
            <p>You can ask to access, correct or delete your data by writing to <a href="mailto:camhdyo@gmail.com">camhdyo@gmail.com</a>. I will reply within one month.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
