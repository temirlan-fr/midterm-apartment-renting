if (window.jQuery) {
    jQuery(function ($) {
        $(".faq-list details").each(function (index) {
            const original = $(this);
            const question = original.children("summary").text();
            const answerId = "faq-answer-" + (index + 1);

            const button = $("<button>")
                .attr({
                    type: "button",
                    "aria-expanded": "false",
                    "aria-controls": answerId
                })
                .addClass("faq-question")
                .text(question);

            const indicator = $("<span>")
                .addClass("faq-indicator")
                .attr("aria-hidden", "true")
                .text("+");

            button.append(indicator);

            const heading = $("<h3>").append(button);

            const answer = $("<div>")
                .attr("id", answerId)
                .addClass("faq-answer")
                .append(original.children("p").detach())
                .hide();

            const item = $("<article>")
                .addClass("faq-item")
                .append(heading, answer);

            original.replaceWith(item);

            button.on("click", function () {
                answer.stop(true, true);

                const expanded = button.attr("aria-expanded") === "true";

                button.attr("aria-expanded", String(!expanded));
                indicator.text(expanded ? "+" : "−");

                const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

                answer.slideToggle(reducedMotion ? 0 : 250);
            });
        });
    });
}