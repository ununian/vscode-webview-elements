import {
  LitElement,
  html,
  customElement,
  property,
  css,
  TemplateResult,
} from 'lit-element';
import {INPUT_LINE_HEIGHT_RATIO} from './includes/helpers';

interface FocusableElement extends Element {
  focus: () => void;
}

@customElement('vscode-label')
export class VscodeLabel extends LitElement {
  @property()
  for = '';

  static styles = css`
    :host {
      cursor: default;
      display: block;
    }

    .wrapper {
      color: var(--vscode--settings-headerForeground);
      font-size: var(--vscode-font-size);
      font-weight: 600;
      line-height: ${INPUT_LINE_HEIGHT_RATIO};
      padding: 5px 0;
    }

    :host-context(vscode-form-group[variant="settings-group"]) .wrapper {
      line-height: 18px;
      padding: 0;
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground);
      opacity: 0.9;
    }
  `;

  private _handleClick() {
    let target;

    if (this.for) {
      const root = this.getRootNode({composed: false}) as Document | ShadowRoot;

      if (root) {
        target = root.querySelector(`#${this.for}`);

        if (target && 'focus' in target) {
          (target as FocusableElement).focus();
        }
      }
    }
  }

  render(): TemplateResult {
    return html`
      <div class="wrapper" @click=${this._handleClick}><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vscode-label': VscodeLabel;
  }
}
