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
  <span>Regular Text</span>

  <a href="#">Simple Link</a>
  <strong>Bold Text</strong>
  <em>Italicized Text</em>
  <u>Underlined Text</u>

  <span class="txtt-c">Capitalized</span>
  <span class="txtt-u">Uppercase</span>
  <span class="txt-c">Centered</span>
  <span class="txt-r">Right Aligned</span>

  <blockquote>A Blockquote </blockquote>

  <p> Lorem Ipsum... </p>
  <p class="wide"> Lorem Ipsum... </p>
  <p class="narr"> Lorem Ipsum... </p>
  <p class="w-mw"> Lorem Ipsum... </p>
`;
docs.panels = `
  <header class="panel"></header>
  <section class="accent"></section>
`;
docs.nav = `
  <nav class="accent">
    <a href="#" class="logo">Logo</a>
    <a href="link">Link 1</a>
    <a href="link">Link 2</a>
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
docs.aside = `
  <aside> ... </aside>
  <aside class="right"></aside>
  <aside class="active">
    Visible Content
  </aside>
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
  .fl-l { float: left; }
  .fl-r { float: right; }
  .d-ib { display: inline-block; }

  /* positioning */
  .abs { position: absolute; }
  .abs.tl { top:    5vh;  left:  5vw; }
  .abs.tr { top:    5vh;  right: 5vw; }
  .abs.bl { bottom: 5vh;  left:  5vw; }
  .abs.br { bottom: 5vh;  right: 5vw; }

  /* responsive */
  @media (--small-screen) {
    .h-sm { display: none; }
  }

  @media (--large-screen) {
    .h-lg { display: none; }
  }
`;
docs.helpers = `
  /* padding */
  .p-a { padding: 1em; }
  .p-t { padding-top: 1em; }
  .p-l { padding-left: 1em; }
  .p-b { padding-bottom: 1em; }
  .p-r { padding-right: 1em; }

  /* margin */
  .m-a { margin: 1em; }
  .m-t { margin-top: 1em; }
  .m-l { margin-left: 1em; }
  .m-b { margin-bottom: 1em; }
  .m-r { margin-right: 1em; }

  /* border */
  .dot { border-style: dotted; }
  .b-a { border: 1px solid; }
  .b-l { border-left: 1px solid; }
  .b-t { border-top: 1px solid; }
  .b-b { border-bottom: 1px solid; }
  .b-r { border-right: 1px solid; }
  
  /* width */
  .w-20  { width: 20%; }
  .w-40  { width: 40%; }
  .w-50  { width: 50%; }
  .w-60  { width: 60%; }
  .w-80  { width: 80%; }
  .w-100 { width: 100%; }
  .w-mw  { max-width: 100%; }
`;
docs.then = `
  var yes = function() {
    console.log('is active');
  };
  var no = function() {
    console.log('is not active')
  };

  $(el).is('active').then(yes, no);
`;
