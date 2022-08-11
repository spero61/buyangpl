import Link from 'next/link';
import Image from 'next/image';
import buyangplShop from '../public/buyangpl-shop.jpg';

export default function Hero() {
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-1/2">
        <a href="http://pf.kakao.com/_ESaYb" id="kakaochannel">
          <img src="https://i.imgur.com/UlaWgGS.png" alt="kakao-chat"></img>
        </a>
      </div>
      <div>
        <Link href="/">
          <a className="hover:opacity-75">
            <Image
              src={buyangplShop}
              width={720}
              height={540}
              alt="BuyangPL shop photo"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
