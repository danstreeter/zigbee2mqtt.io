"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78976],{67796:(t,e,o)=>{o.r(e),o.d(e,{data:()=>d});const d={key:"v-ddd5cd78",path:"/devices/PM-S350-ZB.html",title:"Dawon DNS PM-S350-ZB control via MQTT",lang:"en-US",frontmatter:{title:"Dawon DNS PM-S350-ZB control via MQTT",description:"Integrate your Dawon DNS PM-S350-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-20T17:26:46.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (top endpoint)",slug:"switch-top-endpoint",children:[]},{level:3,title:"Switch (center endpoint)",slug:"switch-center-endpoint",children:[]},{level:3,title:"Switch (bottom endpoint)",slug:"switch-bottom-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PM-S350-ZB.md",git:{updatedTime:164977505e4}}},27860:(t,e,o)=>{o.r(e),o.d(e,{default:()=>a});const d=(0,o(66252).uE)('<h1 id="dawon-dns-pm-s350-zb" tabindex="-1"><a class="header-anchor" href="#dawon-dns-pm-s350-zb" aria-hidden="true">#</a> Dawon DNS PM-S350-ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PM-S350-ZB</td></tr><tr><td>Vendor</td><td>Dawon DNS</td></tr><tr><td>Description</td><td>IOT smart switch 3 gang without neutral wire</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PM-S350-ZB.jpg" alt="Dawon DNS PM-S350-ZB"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-top-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-endpoint" aria-hidden="true">#</a> Switch (top endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint" aria-hidden="true">#</a> Switch (center endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-endpoint" aria-hidden="true">#</a> Switch (bottom endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),i={},a=(0,o(83744).Z)(i,[["render",function(t,e){return d}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,d]of e)t[o]=d;return t}}}]);