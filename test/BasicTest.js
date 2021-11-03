const { expect } = require("chai");
const { describe } = require("mocha");

const { denormalize } = require("..")

describe('Basic Elements', function () {

    it('returns invalid object if object is invalid', function () {
        const inputed = '{"type": "xxx", "tags": null, "content": "Lorem ipsum dolor sit amet"}'
        const expected = "<p>invalid object</p>"

        expect(denormalize(inputed)).equal(expected)

    })

    it('Texts can be denormalized', function () {
        const inputed = '{"type": "Text", "tags": null, "content": "Lorem ipsum dolor sit amet"}'
        const expected = "<p>Lorem ipsum dolor sit amet</p>"

        expect(denormalize(inputed)).equal(expected)

    })

    it('Titles can be denormalized', function () {
        const inputed = '{"type": "Title", "tags": null, "content": "Top Header"}'
        const expected = "<h1>Top Header</h1>"

        expect(denormalize(inputed)).equal(expected)

    })

    it('Images can be denormalized', function () {
        const inputed = '{"type": "Image","tags": null,"content": "https://img-source.fake.url/123123123.png"}'
        const expected = '<img src="https://img-source.fake.url/123123123.png"/>'

        expect(denormalize(inputed)).equal(expected)

    })

    it('Sections can be denormalized', function () {
        const inputed = `{
            "type": "Section",
            "tags": null,
            "children":
            [
                {
                    "type": "Title",
                    "tags": null,
                    "content": "Subtitle"
                },
                {
                    "type": "Text",
                    "tags": null,
                    "content": "Lorem ipsum dolor sit amet"
                }
            ]
        }`

        const outputed = `<div><h1>Subtitle</h1><p>Lorem ipsum dolor sit amet</p></div>`

        expect(denormalize(inputed)).equal(outputed)

    })
})
