onload = () => {
    document.body.innerHTML += `<div id="foldout">
		<a href="index.html">Home</a>
		<a href="about.html">About</a>
		<a href="fundraising.html">Fundraising</a>
		<a href="community.html">Community</a>
		<a href="contact.html">Contact</a>
		<a href="https://www.gofundme.com/f/join-us-to-support-human-trafficking-survivors">Donate</a>
	</div>`
    document.getElementById("foldout").style.left = 0
    changeMenu()

	document.getElementsByClassName("content")[0].innerHTML += `
		<footer>
			<small>© ${new Date().getFullYear()} Empty Streets and <a href="https://rockwill.dev">William Choi-Kim</a>. All Rights Reserved.</small>
			</footer>`
}

function changeMenu() {
    document.getElementById("menuBTN").innerText = parseInt(document.getElementById("foldout").style.left) == 0 ? "MENU" : "CLOSE"
    document.getElementById("foldout").style.left = parseInt(document.getElementById("foldout").style.left) == 0 ? "-100vw" : 0
}