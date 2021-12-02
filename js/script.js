const getNewPosition = (elementToMove) => {
    const elementContainer = elementToMove.parent();
    // Get viewport dimensions (remove the dimension of the div)
    var containerHeight = elementContainer.height() - elementToMove.height();
    var containerWidth = elementContainer.width() - elementToMove.width();

    var newTop = Math.floor(Math.random() * containerHeight);
    var newLeft = Math.floor(Math.random() * containerWidth);

    return {
        top: newTop,
        left: newLeft,
        right: '',
        bottom: ''
    };
}

const moveElement = (element) => {
    element.css(getNewPosition(element));
};

const yes = () => {
    $("#game").hide();
    $("#game-end").css("display", "flex");
}

$(document).ready(() => {
    // Center abosulte buttons
   $(".btn").each((index, value) => {
       $(value).css("left", $(value).outerWidth()*1.5);
    });
   $("#btn-no").click(function() {
       moveElement($(this));
   })
    $("#btn-yes").click(function() {
        yes();
    })
});
