/* additional scripts for demo page */

// doc template
var qdoc = `<article :id="head">
  <h2 class="title">{{ head }}</h2>
  <slot name="subtitle"></slot>
  <div class="row">
    <div class="col">
      <slot></slot>
    </div>
    <div class="col">
      <pre><code>{{ code }} </code></pre>
    </div>
  </div>
</article>`;

// but template
var faq = `<article class="but">
  <h3 class="title">...{{ wait }}</h3>
  <p class="wide txl">
    <slot></slot>
  </p>
</article>`;

// Define quick-doc
Vue.component('quick-doc', {
  props: ['head', 'code'],
  template: qdoc
});

// Define mini-doc
Vue.component('mini-doc', {
  props: ['code'],
  template: '<pre><code>{{ code }} </code></pre>'
});

// Define but
Vue.component('but', {
  props: ['wait'],
  template: faq
})

// Start Vue
var demo = new Vue({
  el: '#morr',
  data: {
    docs: docs
  }
});
