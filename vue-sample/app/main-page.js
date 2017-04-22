const Page = require('tns-core-modules/ui/page').Page

function createPage() {
    let page = new Page()
    page.addEventListener('loaded', () => onReady(page))

    return page
}
exports.createPage = createPage

function onReady(page) {

    const Vue = require('nativescript-vue/dist/index')
    Vue.setDocument(page)

    const vm = new Vue({
        name: 'root',

        template: `
        <scroll-view>
            <stack-layout>
                <button @tap="onTap">TAP HERE</button>
                <button @tap="textRed = !textRed" style="color: white; background-color: darkcyan;">TAP HERE</button>
                <label :style="{color: textRed ? 'red' : 'blue'}" style="text-align: center; margin-top: 20; font-size: 40" :text="showTrick ? 'Poof!' : 'Wait for it!'"></label>
                <button @tap="showTrick = !showTrick">Tap to see a trick!</button>

                <image v-if="showTrick" src="~/images/apple.jpg"></image>
            </stack-layout>
        </scroll-view>
        `,

        data: {
            textRed: false,
            showTrick: false
        },

        methods: {
            onTap() {
                alert('Nice Tap!')
            }
        }
    }).$mount()
}
