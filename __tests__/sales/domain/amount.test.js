import { test, expect } from "vitest";

import { Amount } from "../../../src/sales/domain/amount";

test("givenTwoEqualAmounts whenEquals thenAreEqual", () => {
    // given
    const amount1 = Amount.of(100, 'EUR');
    const amount2 = Amount.of(100, 'EUR');

    // when
    const are_equal = amount1.equals(amount2);

    // then
    expect(are_equal).toBeTruthy();

});
