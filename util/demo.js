/* additional scripts for demo page */

// doc template
var cssdoc = `<article :id="head">
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

var jsdoc = `<div class="row ctr">
  <div class="col">
    <h5 class="title"><code>{{ method}}</code></h5>
  </div>
  <div class="col c2">
    <slot></slot>
  </div>
</div>`;

// but template
var faq = `<article class="but">
  <h3 class="title">...{{ wait }}</h3>
  <p class="wide txl">
    <slot></slot>
  </p>
</article>`;

// Define quick-docs
Vue.component('css-doc', {
  props: ['head', 'code'],
  template: cssdoc
});

Vue.component('js-doc', {
  props: ['method'],
  template: jsdoc
})

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
  },
  methods: {
    showAside: function() {
      $('aside').toggle('active')
    }
  }
});
