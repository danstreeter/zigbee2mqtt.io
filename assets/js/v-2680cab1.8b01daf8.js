"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88489],{76713:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-2680cab1",path:"/devices/BRT-100-TRV.html",title:"Moes BRT-100-TRV control via MQTT",lang:"en-US",frontmatter:{title:"Moes BRT-100-TRV control via MQTT",description:"Integrate your Moes BRT-100-TRV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Eco_mode (binary)",slug:"eco-mode-binary",children:[]},{level:3,title:"Eco_temperature (numeric)",slug:"eco-temperature-numeric",children:[]},{level:3,title:"Max_temperature (numeric)",slug:"max-temperature-numeric",children:[]},{level:3,title:"Min_temperature (numeric)",slug:"min-temperature-numeric",children:[]},{level:3,title:"Valve_state (binary)",slug:"valve-state-binary",children:[]},{level:3,title:"Position (numeric)",slug:"position-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Window (binary)",slug:"window-binary",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Programming_mode (text)",slug:"programming-mode-text",children:[]},{level:3,title:"Boost_heating (binary)",slug:"boost-heating-binary",children:[]},{level:3,title:"Boost_heating_countdown (numeric)",slug:"boost-heating-countdown-numeric",children:[]},{level:3,title:"Boost_heating_countdown_time_set (numeric)",slug:"boost-heating-countdown-time-set-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/BRT-100-TRV.md",git:{updatedTime:164977505e4}}},14008:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var a=o(66252);const i=(0,a.uE)('<h1 id="moes-brt-100-trv" tabindex="-1"><a class="header-anchor" href="#moes-brt-100-trv" aria-hidden="true">#</a> Moes BRT-100-TRV</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>BRT-100-TRV</td></tr><tr><td>Vendor</td><td>Moes</td></tr><tr><td>Description</td><td>Thermostatic radiator valve</td></tr><tr><td>Exposes</td><td>battery, lock (state), eco_mode, eco_temperature, max_temperature, min_temperature, valve_state, position, switch (state), window, climate (local_temperature, current_heating_setpoint, local_temperature_calibration, preset), programming_mode, boost_heating, boost_heating_countdown, boost_heating_countdown_time_set, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/BRT-100-TRV.jpg" alt="Moes BRT-100-TRV"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),d=(0,a.Uk)("This device supports OTA updates, for more information see "),c=(0,a.Uk)("OTA updates"),r=(0,a.Uk)("."),s=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="eco-mode-binary" tabindex="-1"><a class="header-anchor" href="#eco-mode-binary" aria-hidden="true">#</a> Eco_mode (binary)</h3><p>ECO mode (energy saving mode). Value can be found in the published state on the <code>eco_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eco_mode is ON, if <code>OFF</code> OFF.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric" aria-hidden="true">#</a> Eco_temperature (numeric)</h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric" aria-hidden="true">#</a> Max_temperature (numeric)</h3><p>Maximum temperature. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric" aria-hidden="true">#</a> Min_temperature (numeric)</h3><p>Minimum temperature. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="valve-state-binary" tabindex="-1"><a class="header-anchor" href="#valve-state-binary" aria-hidden="true">#</a> Valve_state (binary)</h3><p>Valve state if open or closed. Value can be found in the published state on the <code>valve_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>OPEN</code> valve_state is ON, if <code>CLOSED</code> OFF.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric" aria-hidden="true">#</a> Position (numeric)</h3><p>Position. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-binary" tabindex="-1"><a class="header-anchor" href="#window-binary" aria-hidden="true">#</a> Window (binary)</h3><p>Window status closed or open . Value can be found in the published state on the <code>window</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>CLOSED</code> window is ON, if <code>OPEN</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>current_heating_setpoint</code>, <code>local_temperature_calibration</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: MANUAL MODE ☝ - In this mode, the device executes manual temperature setting. When the set temperature is lower than the &quot;minimum temperature&quot;, the valve is closed (forced closed). PROGRAMMING MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. HOLIDAY MODE ⛱ - In this mode, for example, the vacation mode is set for 10 days and the temperature is setto 15 degrees Celsius. After 10 days, the device will automatically switch to programming mode. TEMPORARY MANUAL MODE - In this mode, ☝ icon will flash. At this time, the device executes the manually set temperature and returns to the weekly programming mode in the next time period. . To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>programming</code>, <code>manual</code>, <code>temporary_manual</code>, <code>holiday</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code></li></ul><h3 id="programming-mode-text" tabindex="-1"><a class="header-anchor" href="#programming-mode-text" aria-hidden="true">#</a> Programming_mode (text)</h3><p>PROGRAMMING MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. You can set up to 4 stages of temperature every for WEEKDAY ➀➁➂➃➄, SATURDAY ➅ and SUNDAY ➆.. Value can be found in the published state on the <code>programming_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;programming_mode&quot;: NEW_VALUE}</code>.</p><h3 id="boost-heating-binary" tabindex="-1"><a class="header-anchor" href="#boost-heating-binary" aria-hidden="true">#</a> Boost_heating (binary)</h3><p>Boost Heating: press and hold &quot;+&quot; for 3 seconds, the device will enter the boost heating mode, and the ▷╵◁ will flash. The countdown will be displayed in the APP. Value can be found in the published state on the <code>boost_heating</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> boost_heating is ON, if <code>OFF</code> OFF.</p><h3 id="boost-heating-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-heating-countdown-numeric" aria-hidden="true">#</a> Boost_heating_countdown (numeric)</h3><p>Countdown in minutes. Value can be found in the published state on the <code>boost_heating_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>15</code>. The unit of this value is <code>Min</code>.</p><h3 id="boost-heating-countdown-time-set-numeric" tabindex="-1"><a class="header-anchor" href="#boost-heating-countdown-time-set-numeric" aria-hidden="true">#</a> Boost_heating_countdown_time_set (numeric)</h3><p>Boost Time Setting 100 sec - 900 sec, (default = 300 sec). Value can be found in the published state on the <code>boost_heating_countdown_time_set</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating_countdown_time_set&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>900</code>. The unit of this value is <code>second</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',34),n={},u=(0,o(83744).Z)(n,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[d,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[c])),_:1}),r]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);