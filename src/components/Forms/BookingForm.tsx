export const BookingForm = () => {
    return (
        <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <input type="date" placeholder="Date" />
        <input type="time" placeholder="Time" />
        <button type="submit">Book</button>
        </form>
    );
}