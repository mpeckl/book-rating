"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function (foo) {
        var _this = this;
        setTimeout(function () {
            console.log(foo, _this.id);
        }, 2000);
        return '';
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map