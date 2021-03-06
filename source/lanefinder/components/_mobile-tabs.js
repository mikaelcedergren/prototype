export default {
  props: {},
  template: `
<div class="mobile-tabs">
  <a href="index.html" class="<!-- $tab-item-1? -->">
    <i class="material-icons">search</i>
    <div>Jobs</div>
  </a>

  <a href="carriers.html" class="<!-- $tab-item-2? -->">
    <i class="material-icons">apartment</i>
    <div>Carriers</div>
  </a>

  <a href="saved.html" class="<!-- $tab-item-3? -->">
    <i class="material-icons">favorite</i>
    <div>Saved</div>
  </a>

  <a href="notifications.html" class="<!-- $tab-item-4? -->">
    <i class="material-icons">notifications</i>
    <div>Notifications</div>
  </a>

  <a href="more.html" class="<!-- $tab-item-5? -->">
    <i class="material-icons">menu</i>
    <div>More</div>
  </a>
</div>
`,
};
