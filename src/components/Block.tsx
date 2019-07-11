import { Component } from "vue-property-decorator";
import { VueComponent } from "@/vue";

import { Link } from "./Link";
import HelloWorld from "./HelloWorld.vue";

@Component
export class Block extends VueComponent {
  render() {
    return (
      <div>
        <Link to="3123123" />
        <HelloWorld />
      </div>
    );
  }
}
