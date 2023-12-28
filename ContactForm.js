function setFormDesignations() {
    const firstname=document.getElementById("Fname")
    const lastname=document.getElementById("Lname")
    const phonenumber=document.getElementById("PhoneNumber")
    const email=document.getElementById("Email")
    const insurance=document.getElementById("Insurance")
    const message=document.getElementById("Tbox")

    firstname.setAttribute("name", GFormNames.fname)
    lastname.setAttribute("name",GFormNames.lname)
    phonenumber.setAttribute("name", GFormNames.phone)
    email.setAttribute("name",GFormNames.email)
    insurance.setAttribute("name", GFormNames.ins)
    message.setAttribute("name", GFormNames.msg)

}

function setFormAction() {
    const form=document.getElementById("ContactForm")
    form.action=submissionLink
}

setFormDesignations()
setFormAction()