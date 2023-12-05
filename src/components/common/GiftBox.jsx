import './GiftBox.css';

export default function GiftBox() {
    return (
        <div className="box">
            <div className="box-tape">
                <div className="box-tape-left"></div>
                <div className="box-tape-right"></div>
                <div className="box-tape-center"></div>
            </div>

            <div className="box-gifts">
                <div className="box-gift-shadow"></div>
            </div>
            <div className="box-gift"></div>
            <div className="box-star box-star-1"></div>
            <div className="box-star box-star-2"></div>
            <div className="box-star box-star-3"></div>
            <div className="box-star box-star-4"></div>
            <div className="box-star box-star-5"></div>
        </div>
    );
}
