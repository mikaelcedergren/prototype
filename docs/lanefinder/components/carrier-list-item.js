export default {
    props: {
      title: {
        type: String,
        default: null,
      },
      size: {
        type: String,
        default: null,
      },
      distance: {
        type: String,
        default: null,
      },
    },
    template: `
  
  <div class="carrier-list-item">
    <grid-row fixed gutter-small>
      <grid-cell shrink>
        <input type="checkbox" onClick="showSendButton();" />
      </grid-cell>
      <grid-cell>
        <grid-row gutter-none>
          <grid-cell>
            {{title}}
          </grid-cell>
          <grid-cell class="shrink align-right color-discreet">
            {{distance}}
          </grid-cell>
        </grid-row>
        <div class="color-discreet">{{size}}</div>
      </grid-cell>
    </grid-row>
  </div>
  
  `,
  }