import KaTeX from './components/KaTeX.vue';

export default {
  install (app, options = {}) {
    app.component('KaTeX', KaTeX);
  }
}

export { KaTeX };
