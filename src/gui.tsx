import { Plugin, Style } from "@opencode/plugin/gui"
import css from "./tui-colors.css?inline"

export default Plugin.define({
  setup(ctx) {
    ctx.add(Style, css)
  },
})
