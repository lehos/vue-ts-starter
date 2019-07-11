import { Component, Prop } from "vue-property-decorator";
import { VueComponent } from "@/vue";

interface Props {
  href?: string;
  to: string;
  targetBlank?: boolean;
  title?: string;
  className?: string;
}

@Component
export class Link extends VueComponent<Props> {
  @Prop()
  href: string;

  @Prop()
  title: string;

  @Prop()
  className: string;

  @Prop()
  targetBlank: boolean;

  render() {
    if (this.targetBlank) {
      return (
        <a
          href={this.href}
          target="_blank"
          title={this.title}
          class={this.className}
          rel="noopener noreferrer"
        >
          {this.$slots.default}
        </a>
      );
    } else if (
      this.href.startsWith("http://") ||
      this.href.startsWith("https://") ||
      this.href.startsWith("www.")
    ) {
      return (
        <a
          href={this.href}
          title={this.title}
          class={this.className}
          rel="noopener noreferrer"
        >
          {this.$slots.default}
        </a>
      );
    } else {
      return (
        <router-link to={this.href} title={this.title} class={this.className}>
          {this.$slots.default}
        </router-link>
      );
    }
  }
}
