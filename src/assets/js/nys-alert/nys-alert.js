import { LitElement, html, css } from 'lit';

class NysAlert extends LitElement {
  static styles = css`

    :host {
      display: block;
    }


body {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-md);
  line-height: 1.5;
  margin: 0;
  padding: var(--padding-md);
  background-color: var(--color-neutral-100);
  color: var(--text-color-dark);
}

pre {}
code {
  font-size: var(--font-size-xs);
}
    /* Base Alert Style */
    .alert {
      /* Color */
      border-left: 8px solid transparent;
      background-color: var(--color-bg-default);
      /* Space */
      margin-bottom: var(--space-m);
      padding: var(--space-inset-default);
      /* Layout */
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* Typography */
      font-family: var(--font-family-sans, Arial, sans-serif);
      font-size: var(--alert-font-size, var(--font-size-md));
      /* Everything Else */
    }
    .alert--slim {
      padding: var(--space-inset-s);
    }
    .alert__icon {
      padding: var(--space-inline-s);
      vertical-align: middle;
    }
    .alert__content {
      display: inline-block;
      vertical-align: middle;
      flex-grow: 1;
    }
    .alert__close {
      background: none;
      border: none;
      cursor: pointer;
      font-size: var(--font-size-md);
      color: inherit;
    }

    /* Status Variants */
    .alert--emergency {
      background-color: var(--color-bg-danger-default);
      color: var(--text-color-light);
      border-color: var(--emergency-dark);
    }
    .alert--error {
      background-color: var(--danger-light);
      color: var(--text-color-dark);
      border-color: var(--danger-dark);
    }
    .alert--info {
      background-color: var(--info-light);
      color: var(--text-color-dark);
      border-color: var(--info-dark);
    }
    .alert--success {
      background-color: var(--success-light);
      color: var(--text-color-dark);
      border-color: var(--success-dark);
    }
    .alert--warning {
      background-color: var(--warning-light);
      color: var(--text-color-dark);
      border-color: var(--warning-dark);
    }
  `;

  static properties = {
    variant: { type: String },
    showIcon: { type: Boolean, attribute: 'show-icon' },
    slim: { type: Boolean, attribute: 'slim' },
    dismissible: { type: Boolean }
  };

  constructor() {
    super();
    this.dismissible = false;
    this.dismissed = false;
    this.showIcon = true; // Default to show icon
  }

  render() {
    if (this.dismissed) {
      return null;
    }

    const alertClass = [
      'alert',
      this.variant ? `alert--${this.variant}` : '',
      this.slim ? 'alert--slim' : '',
    ].join(' ');

    return html`
      <div class="${alertClass}">
        <div>
          ${this.showIcon ? html`<span class="alert__icon">${this._renderIcon()}</span>` : ''}
          <span class="alert__content"><slot></slot></span>
        </div>
        ${this.dismissible ? html`<button class="alert__close" @click="${this._dismiss}">&times;</button>` : ''}
      </div>
    `;
  }

  _renderIcon() {
    switch (this.variant) {
      case 'emergency':
        return html`🚨`; // Example icon for error/emergency
      case 'error':
        return html`❌`; // Example icon for error/emergency
      case 'info':
        return html`ℹ️`; // Example icon for info
      case 'success':
        return html`✅`; // Example icon for success
      case 'warning':
        return html`⚠️`; // Example icon for warning
      default:
        return html``; // No icon for other cases
    }
  }

  _dismiss() {
    this.dismissed = true;
    this.requestUpdate();
  }
}

customElements.define('nys-alert', NysAlert);