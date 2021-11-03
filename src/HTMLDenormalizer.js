function denormalize(inputed) {    
    // convert to javascript object
    const inputObject = JSON.parse(inputed)

    if (Array.isArray(inputObject)) {
        response = ""
        inputObject.forEach(inp => response += process(inp))
        return response
    }

    return process(inputObject)

}

function process(inputObject) {
    // use typeRouter to route to the right handler
    const handler = typeRouter(inputObject.type)

    // get element
    const responseElement = handler(inputObject)

    // return response
    return responseElement
}

function typeRouter(objectType) {
    // if type is text, use handleText
    switch (objectType) {
        case "Text": return handleText
        case "Title": return handleTitle
        case "Image": return handleImage
        case "Section": return handleSection
        case "Table": return handleTable
        case "List": return handleList
        default: return handleNotFound
    }
}

// denormalize p
function handleText(inputObject) {
    // turn textObject into an <p> html element
    return "<p>" + inputObject.content + "</p>"
}

// denormalize h
function handleTitle(inputObject) {
    // turn textObject into an <p> html element
    return "<h1>" + inputObject.content + "</h1>"
}

// denormalize imgs
function handleImage(inputObject) {
    // turn textObject into an <p> html element
    return '<img src="' + inputObject.content + '"/>'
}

// denormalize divs
function handleSection(inputObject) {
    sectionResponse = `<div>`

    inputObject.children.forEach(child => {
        sectionResponse += process(child)
    });

    sectionResponse += `</div>`

    return sectionResponse

}

// denormalize tables
function handleTable(inputObject) {
    var tableResponse = `<table>`

    // for each row, check if it is a header. if it is, return content in a th tag
    // else normalize content and return in a td tag
    inputObject.content.forEach(part => {
        tableResponse += `<tr>`

        part.forEach(row => {

            if (row.type === "Header") {
                tableResponse += `<th>`
                tableResponse += row.content[0].children[0].content
                tableResponse += `</th>`

            } else if (row.type === "Data") {
                tableResponse += `<td>`
                tableResponse += process(row.content[0])
                tableResponse += `</td>`

            } else {
                tableResponse = `<null/>`
                return tableResponse
            }
        })

        tableResponse += `</tr>`

    })

    tableResponse += `</table>`

    return tableResponse
}

// denormalize ul and ol
function handleList(inputObject) {
    var listResponse = ""

    // ul or ol tag
    if (inputObject.list_type === "Unordered") {
        listResponse = "<ul>"
        closingTag = "</ul>"
    } else if (inputObject.list_type === "Ordered") {
        listResponse = "<ol>"
        closingTag = "</ol>"
    } else {
        return "<null/>"
    }


    inputObject.content.forEach(item => {
        listResponse += "<li>"

        // if type is text, don't normalize into <p>.
        if (item.content[0].children[0].type === "Text") {
            listResponse += item.content[0].children[0].content
        } else {
            // otherwise just normalize like everything else
            listResponse += process(item.content[0])
        }
        listResponse += "</li>"
    })

    listResponse += closingTag
    return listResponse
}

// TODO: better error handling
function handleNotFound(content) {
    return "<p>invalid object</p>"
}

module.exports.denormalize = denormalize;