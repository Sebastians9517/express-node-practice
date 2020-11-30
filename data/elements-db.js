const elements = [
    {element: 'Water', mastered: true},
    {element: 'Earth', mastered: false},
    {element: 'Fire', mastered: false},
    {element: 'Air', mastered: true}
]

module.exports = {
    getAll: function() {
        return elements;
    }
}
