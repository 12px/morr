/* additional scripts for demo page */

// data examples
var docs = {};
docs.structure = `
  <header></header>
  <nav></nav>
  <section>
    <article></article>
  </section>
  <footer></footer>
`;
docs.typography = `
  <span>Muli</span>
  <span class="th">Vollkorn</span>
  <span class="ta">Old Standard TT</span>

  <a href="#">Simple Link</a>
  <strong>Bold Text</strong>
  <em>Italicized Text</em>
  <u>Underlined Text</u>

  <span class="ttc">Capitalized</span>
  <span class="ttu">Uppercase</span>
  <span class="tc">Centered</span>
  <span class="tr">Right Aligned</span>

  <blockquote>A Blockquote </blockquote>

  <p> Lorem Ipsum... </p>
  <p class="wide"> Lorem Ipsum... </p>
  <p class="narr"> Lorem Ipsum... </p>
  <p class="mw"> Lorem Ipsum... </p>
`;
docs.panels = `
  <header class="panel"></header>
  <section class="bg"></section>
`;
docs.nav = `
  <nav class="bg">
    <a href="#" class="logo">Logo</a>
    <a href="nav-link">Link 1</a>
    <a href="nav-link">Link 2</a>
  </nav>
`;
docs.grid = `
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
  </div>
`;
docs.form = `
  <form>
    <div class="row">
      <div class="col">
        <label>Email</label>
        <input type="email">
      </div>
      <div class="col">
        <label>Reason</label>
        <select>...</select>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <label>Message</label>
        <textarea></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <label class="chk">
          <input type="checkbox">
          Important Checkbox
        </label>
      </div>
      <div class="col tr">
        <input type="submit">
      </div>
    </div>
  </form>
`;
docs.button = `
  <a href="#" class="btn"></a>
  <button></button>
  <input type="submit">
`;
docs.lists = `
  <ul>
    <li> Item 1 </li>
  </ul>
  <ol>
    <li> Item A </li>
  </ol>
`;
docs.code = `
  <code>inline</code>
  <pre><code>
    preformatted
  </code></pre>
`;
docs.table = `
  <table>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fruit</td>
        <td>Apples</td>
      </tr>
      <tr>
        <td>Vegetables</td>
        <td>Cucumbers</td>
      </tr>
    </tbody>
  </table>
`;
docs.utilities = `
  /* utilities */
  .fl { float: left; }
  .fr { float: right; }
  .fw { width: 100%; }
  .mw { max-width: 100%; }
  .ib { display: inline-block; }

  .fw,
  .mw { box-sizing: border-box; }

  .mute { opacity: 0.6; }

  /* responsive */
  @media (--small-screen) {
    .hsm { display: none; }
  }

  @media (--large-screen) {
    .hlg { display: none; }
  }
`;
docs.helpers = `
  /* padding */
  .pa { padding: 1rem; }
  .pt { padding-top: 1rem; }
  .pl { padding-left: 1rem; }
  .pb { padding-bottom: 1rem; }
  .pr { padding-right: 1rem; }

  /* border */
  .ba { border: 1px solid; }
  .bl { border-left: 1px solid; }
  .bt { border-top: 1px solid; }
  .bb { border-bottom: 1px solid; }
  .br { border-right: 1px solid; }
  .bd.ba { border-style: dotted; }
  .bd.bl { border-left-style: dotted; }
  .bd.br { border-right-style: dotted; }
  .bd.bb { border-bottom-style: dotted; }
  .bd.bt { border-top-style: dotted; }
`;
