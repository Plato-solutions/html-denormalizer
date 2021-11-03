const { expect } = require("chai");
const { describe } = require("mocha");

const { denormalize } = require("..")

describe('Section/Divs', function () {

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

    it('Nested Sections can be denormalized', function () {
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
                },
                {
                    "type": "Text",
                    "tags": null,
                    "content": "Lorem ipsum dolor sit amet"
                }
            ]
        }`

        const outputed = `<div><h1>Subtitle</h1><div><h1>Subtitle</h1><p>Lorem ipsum dolor sit amet</p></div><p>Lorem ipsum dolor sit amet</p></div>`

        expect(denormalize(inputed)).equal(outputed)

    })
})
