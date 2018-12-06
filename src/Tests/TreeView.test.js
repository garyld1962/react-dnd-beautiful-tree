const treeData = {
    id: 0,
    name: 'Root',
    parentId: null,
    payload: null,
    children: [{
        id: 1,
        name: 'Node 1',
        parentId: 0,
        payload: null,
        children: [{
            id: 2,
            name: 'Child Node 1.1',
            parentId: 1,
            payload: null,
            children: [{
                id: 3,
                name: 'Grand Child Node 1.1.',
                parentId: 2,
                payload: null,
                children: []
            }, {
                id: 4,
                name: 'Grand Child Node 1.1.2',
                parentId: 2,
                payload: null,
                children: []
            }, {
                id: 5,
                name: 'Grand Child Node 1.1.3',
                parentId: 2,
                payload: null,
                children: []
            }]
        }, {
            id: 6,
            name: 'Child Node 1.2',
            parentId: 1,
            payload: null,
            children: [{
                id: 7,
                name: 'Grand Child Node 1.2.1',
                parentId: 1,
                payload: null,
                children: []
            }, {
                id: 8,
                name: 'Grand Child Node 1.2.2',
                parentId: 1,
                payload: null,
                children: []
            }, {
                id: 9,
                name: 'Grand Child Node 1.2.3',
                parentId: 1,
                payload: null,
                children: []
            }]
        }]
    }, {
        id: 10,
        name: 'Node 2',
        parentId: 0,
        payload: null,
        children: [{
            id: 12,
            name: 'Child Node 2.1',
            parentId: 10,
            payload: null,
            children: [{
                id: 13,
                name: 'Grand Child Node 2.1.1',
                parentId: 12,
                payload: null,
                children: []
            }, {
                id: 14,
                name: 'Grand Child Node 2.1.2',
                parentId: 12,
                payload: null,
                children: []
            }, {
                id: 15,
                name: 'Grand Child Node 2.1.3',
                parentId: 12,
                payload: null,
                children: []
            }]
        }, {
            id: 16,
            name: 'Child Node 2.2',
            parentId: 10,
            payload: null,
            children: [{
                id: 17,
                name: 'Grand Child Node 2.2.1',
                parentId: 10,
                payload: null,
                children: []
            }, {
                id: 18,
                name: 'Grand Child Node 2.2.2',
                parentId: 10,
                payload: null,
                children: []
            }, {
                id: 19,
                name: 'Grand Child Node 2.2.3',
                parentId: 10,
                payload: null,
                children: []
            }]
        }]
    }]
}

test('Find Node By Id', () => {

    let node = findNode(19)

  expect(node.id.toBe(19))
})
