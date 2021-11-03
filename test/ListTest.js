const { expect } = require("chai");
const { describe } = require("mocha");
const { denormalize } = require("..")

describe('List elements', function () {
    it('unordered lists can be denormalized', function () {
        const inputed = `
        {
            "type": "List",
            "tags": null,
            "list_type": "Unordered",
            "content":
            [
                {
                    "type": "Item",
                    "content":
                    [
                        {
                            "type": "Section",
                            "tags": null,
                            "children":
                            [
                                {
                                    "type": "Text",
                                    "tags": null,
                                    "content": "Item 1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Item",
                    "content":
                    [
                        {
                            "type": "Section",
                            "tags": null,
                            "children":
                            [
                                {
                                    "type": "Text",
                                    "tags": null,
                                    "content": "Item 2"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        `
        const expected = `<ul><li>Item 1</li><li>Item 2</li></ul>`
        expect(denormalize(inputed)).equal(expected)

    })

    it('Ordered lists can be denormalized', function () {
        const inputed = `{
            "type": "List",
            "tags": null,
            "list_type": "Ordered",
            "content":
            [
                {
                    "type": "Item",
                    "content":
                    [
                        {
                            "type": "Section",
                            "tags": null,
                            "children":
                            [
                                {
                                    "type": "Text",
                                    "tags": null,
                                    "content": "Item 1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Item",
                    "content":
                    [
                        {
                            "type": "Section",
                            "tags": null,
                            "children":
                            [
                                {
                                    "type": "Text",
                                    "tags": null,
                                    "content": "Item 2"
                                }
                            ]
                        }
                    ]
                }
            ]
        }`

        const expected = `<ol><li>Item 1</li><li>Item 2</li></ol>`
        expect(denormalize(inputed)).equal(expected)

    })
})