const { expect } = require("chai");
const { describe } = require("mocha");
const { denormalize } = require("..")

describe('Table elements', function () {
    it('tables can be denormalized', function () {
        const inputed = `{
            "type": "Table",
            "tags": null,
            "content":
            [
                [
                    {
                        "type": "Header",
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
                                        "content": "Table Header 1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Header",
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
                                        "content": "Table Header 2"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                [
                    {
                        "type": "Data",
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
                                        "content": "Data 1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Data",
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
                                        "content": "Data 2"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            ]
        }`

        const expected = '<table><tr><th>Table Header 1</th><th>Table Header 2</th></tr><tr><td><div><p>Data 1</p></div></td><td><div><p>Data 2</p></div></td></tr></table>'
        expect(denormalize(inputed)).equal(expected)

    })
})