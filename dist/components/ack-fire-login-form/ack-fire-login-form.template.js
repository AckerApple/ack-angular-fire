"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<form (submit)=\"login()\"><div class=\"form-group\" [class.has-error]=\"submitCount &amp;&amp; !vals.email\" [shakeOn]=\"!vals.email &amp;&amp; submitCount\"><label class=\"pad-left\"><i class=\"fas fa-envelope\"></i><strong>&nbsp;Email</strong></label><input class=\"form-control\" type=\"email\" required=\"required\" name=\"email\" [(ngModel)]=\"email\" (keyup)=\"reval()\"/></div><br/><div class=\"form-group\" [class.has-error]=\"submitCount &amp;&amp; !vals.password\" [shakeOn]=\"!vals.password &amp;&amp; submitCount\"><label class=\"pad-left\"><i class=\"fas fa-key\"></i><strong>&nbsp;Password</strong></label><input class=\"form-control\" type=\"password\" required=\"required\" name=\"password\" [(ngModel)]=\"user.password\" (keyup)=\"reval()\"/></div><div class=\"text-assertive text-center\" *ngIf=\"rejectCount\" [shakeOn]=\"rejectCount\" [@fadeInOutUp]=\"1\"><i class=\"fas fa-exclamation-triangle\"></i>&nbsp;invalid login. try again</div><br/><button class=\"width-full border-0 bg-assertive pad block text-white\" type=\"submit\"><div class=\"fa fa-spinner fa-spin fa-lg\" *ngIf=\"loadCount;else goLabel\"></div><ng-template #goLabel=\"\"><strong>GO</strong></ng-template></button><div class=\"text-center\"><br/><a class=\"text-white text-underline\" (click)=\"googleSignIn()\"><img src=\"/assets/images/btn_google_signin_dark_focus_web.png\"/></a></div></form>";
//# sourceMappingURL=ack-fire-login-form.template.js.map