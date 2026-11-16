.faq-item {
    padding: 20px 0;
    border-bottom: 1px solid #cdbfae;
}

.faq-item h3 {
    margin: 0;
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    min-height: 44px;
    padding: 4px 0;
    border: 0;
    border-radius: 8px;
    color: #172539;
    background-color: transparent;
    font: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    cursor: pointer;
    transition: color 160ms ease;
}

.faq-question:hover {
    color: #85512b;
}

.faq-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #85512b;
    background-color: #e9dfd2;
    font-size: 23px;
    font-weight: 400;
    line-height: 1;
}

.faq-answer p {
    margin: 15px 0 0;
    color: #4e5864;
    line-height: 1.7;
}

[data-theme="dark"] .faq-item {
    border-color: #516073;
}

[data-theme="dark"] .faq-question {
    color: #f0f4fa;
}

[data-theme="dark"] .faq-question:hover {
    color: #dfb58d;
}

[data-theme="dark"] .faq-indicator {
    color: #dfb58d;
    background-color: #2a3b50;
}

[data-theme="dark"] .faq-answer p {
    color: #c5d0df;
}

@media (max-width: 576px) {
    .faq-question {
        gap: 14px;
        font-size: 17px;
    }

    .faq-item {
        padding: 16px 0;
    }
}