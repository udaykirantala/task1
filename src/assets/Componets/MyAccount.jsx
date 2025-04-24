import '../Componets/MyAccount.css'
function MyAccount() {
    return (
        <section className="total-account-details-container">
            <div className="total-account-details-table">
                <table border="1">
                    <tbody>
                        <tr>
                            <td className="total-account-details-colour-text">
                                <i className="fa-solid fa-sliders"></i> Dashboard
                            </td>
                        </tr>
                        <tr>
                            <td id="total-account-details-orders">
                                <i className="fa-solid fa-bag-shopping"></i> Orders
                            </td>
                        </tr>
                        <tr>
                            <td id="total-account-details-update-profile">
                                <i className="fa-regular fa-user"></i> Update Profile
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa-solid fa-location-dot"></i> My Address
                            </td>
                        </tr>
                        <tr>
                            <td id="total-account-details-logout">
                                <i className="fa-solid fa-right-from-bracket"></i> Logout
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="total-account-user-details-table">
                <table border="1">
                    <tbody>
                        <tr className="total-user-details-colour-text">
                            <td>Hello Rosie</td>
                        </tr>
                        <tr>
                            <td>
                                From your account dashboard, you can easily check and view your recent orders, manage your shipping and billing address, and edit your password and account details.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
export default MyAccount