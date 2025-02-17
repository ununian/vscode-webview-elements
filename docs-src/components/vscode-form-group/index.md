---
layout: component.njk
title: FormGroup
tags: component
component: vscode-form-group
---

# VscodeFormGroup

```typescript
import '@bendera/vscode-webview-elements/dist/vscode-form-group';
```

## Basic example

Form group is a container component to organize the form widgets. It applies 
some CSS magic to nicely arrange the elements. The default layout is the horizontal.

<component-preview>
  <vscode-form-group>
    <vscode-label for="basic-inputbox-01">
      Lorem <span class="normal">ipsum</span>:
    </vscode-label>
    <vscode-inputbox id="basic-inputbox-01" placeholder="Placeholder example"></vscode-inputbox>
    <vscode-form-helper>
      <p>Lorem ipsum <code>let dolor = sit amet</code>, consectetur adipiscing elit. <span class="error">Suspendisse</span> faucibus imperdiet sapien, a gravida <a href="#">dolor</a>.</p>
    </vscode-form-helper>
  </vscode-form-group>
</component-preview>

```html
<vscode-form-group>
  <vscode-label for="basic-inputbox-01">
    Lorem <span class="normal">ipsum</span>:
  </vscode-label>
  <vscode-inputbox id="basic-inputbox-01" placeholder="Placeholder example"></vscode-inputbox>
  <vscode-form-helper>
    <p>Lorem ipsum <code>let dolor = sit amet</code>, consectetur adipiscing elit. <span class="error">Suspendisse</span> faucibus imperdiet sapien, a gravida <a href="#">dolor</a>.</p>
  </vscode-form-helper>
</vscode-form-group>
```

## Vertical layout

<component-preview>
  <vscode-form-group variant="vertical">
    <vscode-label for="vertical-inputbox-01">
      Lorem <span class="normal">ipsum</span>:
    </vscode-label>
    <vscode-inputbox id="vertical-inputbox-01" placeholder="Placeholder example"></vscode-inputbox>
    <vscode-form-helper>
      <p>Lorem ipsum <code>let dolor = sit amet</code>, consectetur adipiscing elit. <span class="error">Suspendisse</span> faucibus imperdiet sapien, a gravida <a href="#">dolor</a>.</p>
    </vscode-form-helper>
  </vscode-form-group>
</component-preview>

```html
<vscode-form-group variant="vertical">
  <vscode-label for="vertical-inputbox-01">
    Lorem <span class="normal">ipsum</span>:
  </vscode-label>
  <vscode-inputbox id="vertical-inputbox-01" placeholder="Placeholder example"></vscode-inputbox>
  <vscode-form-helper>
    <p>Lorem ipsum <code>let dolor = sit amet</code>, consectetur adipiscing elit. <span class="error">Suspendisse</span> faucibus imperdiet sapien, a gravida <a href="#">dolor</a>.</p>
  </vscode-form-helper>
</vscode-form-group>
```

## Settings page group

The `settings-group` layout mimics the settings page of the VSCode. The
recommended item order: label, helper, form widget.

<component-preview>
  <vscode-form-group variant="settings-group">
    <vscode-label for="settings-inputbox-01">
      Lorem <span class="normal">ipsum</span>:
    </vscode-label>
    <vscode-form-helper>
      <p>Lorem ipsum <code>let dolor = sit amet</code>, consectetur adipiscing elit. <span class="error">Suspendisse</span> faucibus imperdiet sapien, a gravida <a href="#">dolor</a>.</p>
    </vscode-form-helper>
    <vscode-inputbox id="settings-inputbox-01" placeholder="Placeholder example"></vscode-inputbox>
  </vscode-form-group>
</component-preview>

```html
<vscode-form-group variant="settings-group">
  <vscode-label for="settings-inputbox-01">
    Lorem <span class="normal">ipsum</span>:
  </vscode-label>
  <vscode-form-helper>
    <p>Lorem ipsum <code>let dolor = sit amet</code>, consectetur adipiscing elit. <span class="error">Suspendisse</span> faucibus imperdiet sapien, a gravida <a href="#">dolor</a>.</p>
  </vscode-form-helper>
  <vscode-inputbox id="settings-inputbox-01" placeholder="Placeholder example"></vscode-inputbox>
</vscode-form-group>
```