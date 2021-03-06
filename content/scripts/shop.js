window.onload = function () {
    var country = location.host.replace(/^.*\./,"").toUpperCase();
    var currency_code = country === 'NZ' ? 'NZD' : 'AUD';

    function n(item_price, coupon_code) {
        var coupon_code = coupon_code.toUpperCase()
        var coupon_value = t[coupon_code];

        var saved_amount = coupon_value
        if (!coupon_value || item_price == e['HU_000']) {
            saved_amount = 0;
        } else if (coupon_code === 'AL5H' && item_price === e.HU_300) {
            saved_amount = 0;
        } else if (coupon_code === 'AL5W' && item_price === e.HU_300) {
            saved_amount = 0;
        } else if (coupon_code === 'AL3W' && item_price === e.HU_500) {
            saved_amount = 0;
        } else if (coupon_value === 10 || coupon_value === 5) {
            saved_amount = (coupon_value * item_price / 100).toFixed(2);
        }
        var code = saved_amount === 0 ? '' : coupon_code
        $("#item_number").val(code)
        return saved_amount
    }
    function r(t) {
        if (t === "") {
            return 0
        }
        var n = t.split("-")[0];
        return e[n]
    }
    var rrp = country === 'NZ' ? {HU_300: 599,HU_500: 699} : {HU_300: 459,HU_500: 549};
    var e = country === 'NZ' ? {HU_300: 499.95,HU_500: 599.95,HU_000: 79.95,___: 0} : {HU_300: 359.95,HU_500: 489.95,HU_000: 59.95,___: 0};
    var t = {
        SPCA: 100,
        SPAG: 50,
        SPSG: 25,
        VIRGIN: 25,
        SPCG: 10,
        ALXV: 10,
        ALWQ: 5,
        AL5H: 50,
        AL5W: 100,
        AL3W: 65,
        FOOD: 20
    };

    $('input[name=lc]').val(country)
    $('input[name=currency_code]').val(currency_code)
    $("#rrp-300").text("$" + rrp["HU_300"]);
    $("#rrp-500").text("$" + rrp["HU_500"]);
    $("#price-300").text("$" + e["HU_300"]);
    $("#price-500").text("$" + e["HU_500"]);
    $("#model").change(function () {
        var e = r($(this).attr("value"));
        var t = n(e, $("#coupon").val());
        var i = e - t;
        $("#total").html("Total: $" + i);
        $("#amount").val(i)
    });
    $("#apply").click(function () {
        var e = r($("#model option:selected").val());
        var t = n(e, $("#coupon").val());
        if (t === 0) {
            alert("Sorry, your coupon was invalid or doesn't apply to your selected item. Please try again.")
        } else {
            alert("Coupon accepted. You saved $" + t)
        }
        var i = e - t;
        $("#total").html("Total: $" + i);
        $("#amount").val(i)
    });
    $("#buy").click(function () {
        var model = $("#model option:selected").val();
        if (model === "") {
            alert("Please select an item to purchase.");
            return false
        }
    });
};