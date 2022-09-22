import React from 'react'
import { Link } from 'react-router-dom'
import { Context1 } from '../../../../Context/Context'
import './_Logotype.scss'

const Logotype = () => {
  const { actions: { setCategory,setSort }} = React.useContext(Context1)

  const logotypeClickHandler = () => {
    setSort(0)
    setCategory(0)
  }

  return (
    <Link to="/" onClick={logotypeClickHandler}>
      <svg className="logotype__largeScreen" width="204" height="32" viewBox="0 0 204 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.0664 8.98327L21.7563 0.561624C21.5837 0.383767 21.3779 0.242508 21.1509 0.146084C20.9239 0.0496598 20.6803 -1.73708e-10 20.4341 -1.73709e-10C20.188 -1.73708e-10 19.9443 0.0496598 19.7173 0.146084C19.4903 0.242508 19.2845 0.383767 19.1119 0.561624L12.1571 7.62656L0.551384 19.3847C0.376685 19.5601 0.238009 19.7688 0.143368 19.9988C0.0487281 20.2288 1.36892e-10 20.4755 1.36891e-10 20.7247C1.36892e-10 20.9738 0.0487281 21.2206 0.143368 21.4506C0.238009 21.6806 0.376685 21.8893 0.551384 22.0646L8.86478 30.4729C9.03736 30.6507 9.24315 30.792 9.47016 30.8884C9.69717 30.9848 9.94085 31.0345 10.187 31.0345C10.4331 31.0345 10.6768 30.9848 10.9038 30.8884C11.1308 30.792 11.3366 30.6507 11.5092 30.4729L21.8952 19.9307L30.0664 11.6464C30.2394 11.4718 30.3767 11.2643 30.4704 11.0358C30.564 10.8073 30.6122 10.5623 30.6122 10.3149C30.6122 10.0674 30.564 9.8224 30.4704 9.5939C30.3767 9.36539 30.2394 9.15788 30.0664 8.98327Z" fill="white"></path><path d="M29.4814 9.58277L21.1647 1.15777C20.972 0.963234 20.7111 0.854004 20.4391 0.854004C20.1671 0.854004 19.9062 0.963234 19.7136 1.15777L10.7225 10.2695L20.5036 20.1617L29.4814 11.0634C29.5779 10.9665 29.6546 10.8512 29.7069 10.7242C29.7592 10.5971 29.7861 10.4608 29.7861 10.3231C29.7861 10.1854 29.7592 10.0491 29.7069 9.92202C29.6546 9.79494 29.5779 9.67964 29.4814 9.58277ZM22.1563 12.0181C21.7625 12.4181 21.2439 12.6673 20.689 12.7232C20.1341 12.7791 19.5773 12.6382 19.1135 12.3246C18.6496 12.011 18.3074 11.5441 18.1452 11.0035C17.983 10.4628 18.0108 9.88192 18.2239 9.35973C18.437 8.83754 18.8222 8.40641 19.3139 8.13983C19.8055 7.87324 20.3732 7.7877 20.9201 7.89778C21.467 8.00786 21.9594 8.30676 22.3132 8.74351C22.667 9.18027 22.8604 9.72786 22.8604 10.2929C22.8613 10.6134 22.7996 10.9308 22.6787 11.2269C22.5579 11.5231 22.3803 11.792 22.1563 12.0181Z" fill="#E31837"></path><path d="M1.13935 19.981C0.947383 20.1763 0.8396 20.4407 0.8396 20.7163C0.8396 20.9919 0.947383 21.2563 1.13935 21.4516L9.45274 29.8766C9.54793 29.9733 9.66101 30.0501 9.78552 30.1024C9.91002 30.1548 10.0435 30.1817 10.1783 30.1817C10.3131 30.1817 10.4466 30.1548 10.5711 30.1024C10.6956 30.0501 10.8087 29.9733 10.9039 29.8766L19.8883 20.7783L10.1238 10.876L1.13935 19.981ZM8.33878 22.4063C7.94489 22.8063 7.42632 23.0555 6.87145 23.1114C6.31658 23.1672 5.75976 23.0264 5.2959 22.7128C4.83203 22.3992 4.48983 21.9323 4.32762 21.3917C4.16541 20.851 4.19323 20.2701 4.40634 19.7479C4.61945 19.2257 5.00466 18.7946 5.49632 18.528C5.98797 18.2614 6.55563 18.1759 7.10255 18.286C7.64947 18.396 8.14179 18.6949 8.49561 19.1317C8.84942 19.5684 9.04282 20.116 9.04285 20.6811C9.04323 21.0015 8.98123 21.3188 8.86042 21.6148C8.7396 21.9109 8.56234 22.1798 8.33878 22.4063ZM12.0013 19.0564C12.3952 18.6589 12.9129 18.412 13.4663 18.3579C14.0196 18.3038 14.5744 18.4458 15.036 18.7598C15.4976 19.0737 15.8376 19.5401 15.998 20.0795C16.1584 20.6189 16.1292 21.198 15.9155 21.7181C15.7019 22.2382 15.3169 22.6672 14.8261 22.9319C14.3354 23.1966 13.7693 23.2807 13.2242 23.1698C12.6792 23.059 12.1889 22.7601 11.8369 22.324C11.485 21.8879 11.2931 21.3417 11.2939 20.7783C11.294 20.4577 11.3565 20.1403 11.4779 19.8442C11.5993 19.5481 11.7771 19.2793 12.0013 19.0531V19.0564Z" fill="#006491"></path><path d="M15.0762 30.1277V28.7878H14.6002V28.4829H15.896V28.7911H15.4233V30.1311L15.0762 30.1277Z" fill="#F8F8F8"></path><path d="M17.5285 30.1277V28.9418L17.0658 30.1277H16.917L16.4608 28.9418V30.1277H16.1138V28.4829H16.5964L16.9897 29.5113L17.3864 28.4829H17.8591V30.1277H17.5285Z" fill="#F8F8F8"></path><path d="M43.906 9.58105H36.9753C36.9206 9.58105 36.8665 9.59188 36.816 9.61291C36.7654 9.63395 36.7196 9.66477 36.6811 9.7036C36.6425 9.74243 36.6121 9.78851 36.5914 9.83917C36.5708 9.88984 36.5604 9.94408 36.5608 9.99879V25.5974C36.5608 25.6516 36.5715 25.7054 36.5924 25.7555C36.6133 25.8056 36.6439 25.8511 36.6824 25.8893C36.721 25.9275 36.7667 25.9578 36.817 25.9782C36.8672 25.9987 36.9211 26.009 36.9753 26.0086H43.9287C49.389 26.0086 52.919 22.7704 52.919 17.7835C52.919 12.7966 49.3825 9.58105 43.906 9.58105ZM43.906 21.6791H41.5386V13.9073H43.9287C46.3965 13.9073 47.87 15.3516 47.87 17.7738C47.8816 18.2939 47.7863 18.8108 47.5902 19.2926C47.394 19.7744 47.1011 20.2109 46.7296 20.5751C46.3581 20.9393 45.9159 21.2234 45.4302 21.41C44.9446 21.5965 44.4258 21.6815 43.906 21.6597" fill="#F8F8F8"></path><path d="M83.6407 13.8199C82.8305 13.8155 82.0307 14.0034 81.3073 14.3682C80.5838 14.733 79.9572 15.2642 79.4791 15.9183C78.9706 14.5291 77.8177 13.8264 76.0559 13.8264C74.1127 13.8264 72.6294 14.7978 72.1145 15.4746V14.5356C72.1145 14.4256 72.0708 14.3202 71.993 14.2425C71.9153 14.1647 71.8099 14.1211 71.6999 14.1211H68.0921C68.0378 14.1211 67.9841 14.1318 67.934 14.1527C67.8838 14.1735 67.8384 14.2041 67.8001 14.2427C67.7619 14.2812 67.7316 14.3269 67.7112 14.3772C67.6907 14.4274 67.6804 14.4813 67.6808 14.5356V25.5974C67.6808 25.6514 67.6914 25.7048 67.7121 25.7547C67.7328 25.8046 67.7631 25.85 67.8013 25.8882C67.8395 25.9263 67.8848 25.9566 67.9347 25.9773C67.9846 25.998 68.0381 26.0086 68.0921 26.0086H71.6999C71.8093 26.0086 71.9143 25.9654 71.9919 25.8884C72.0696 25.8113 72.1136 25.7067 72.1145 25.5974V18.6708C72.3232 18.3886 72.5936 18.1579 72.9051 17.9963C73.2167 17.8347 73.561 17.7464 73.9119 17.7382C74.7863 17.7382 75.2656 18.2109 75.2656 19.0691V25.5974C75.2665 25.7067 75.3105 25.8113 75.3882 25.8884C75.4658 25.9654 75.5708 26.0086 75.6802 26.0086H79.2848C79.3392 26.009 79.3932 25.9987 79.4436 25.9783C79.4941 25.9579 79.54 25.9277 79.5788 25.8895C79.6176 25.8513 79.6485 25.8059 79.6697 25.7557C79.691 25.7056 79.7021 25.6518 79.7025 25.5974V18.6708C79.9127 18.3845 80.1865 18.1509 80.5024 17.9885C80.8182 17.8261 81.1675 17.7393 81.5226 17.7349C82.3841 17.7349 82.8796 18.2207 82.8796 19.0658V25.5974C82.8796 25.6516 82.8904 25.7054 82.9112 25.7555C82.9321 25.8056 82.9627 25.8511 83.0012 25.8893C83.0398 25.9275 83.0855 25.9578 83.1358 25.9782C83.186 25.9987 83.2399 26.009 83.2942 26.0086H86.8987C87.0081 26.0086 87.1131 25.9654 87.1907 25.8884C87.2684 25.8113 87.3124 25.7067 87.3133 25.5974V17.3917C87.3133 15.0861 86.0178 13.8296 83.6407 13.8296" fill="#F8F8F8"></path><path d="M93.1397 14.1148H89.5416C89.4869 14.1143 89.4326 14.1247 89.3819 14.1454C89.3313 14.166 89.2852 14.1965 89.2463 14.235C89.2075 14.2735 89.1767 14.3194 89.1556 14.3699C89.1346 14.4204 89.1238 14.4745 89.1238 14.5293V25.5975C89.1242 25.652 89.1353 25.7058 89.1566 25.7559C89.1778 25.806 89.2087 25.8515 89.2475 25.8897C89.2863 25.9279 89.3322 25.958 89.3827 25.9785C89.4331 25.9989 89.4871 26.0092 89.5416 26.0088H93.1461C93.2555 26.0088 93.3605 25.9656 93.4381 25.8885C93.5158 25.8115 93.5598 25.7069 93.5607 25.5975V14.5293C93.5607 14.4193 93.517 14.3139 93.4393 14.2362C93.3615 14.1584 93.2561 14.1148 93.1461 14.1148" fill="#F8F8F8"></path><path d="M91.4456 8.27588C90.9528 8.27524 90.4708 8.42083 90.0608 8.69421C89.6507 8.96759 89.331 9.35647 89.1421 9.81163C88.9532 10.2668 88.9036 10.7677 88.9996 11.2511C89.0956 11.7345 89.3329 12.1785 89.6814 12.5269C90.0298 12.8754 90.4739 13.1126 90.9573 13.2086C91.4407 13.3046 91.9418 13.255 92.397 13.0661C92.8522 12.8772 93.2411 12.5576 93.5145 12.1475C93.7879 11.7375 93.9335 11.2556 93.9329 10.7628C93.9312 10.1038 93.6686 9.47221 93.2025 9.00618C92.7364 8.54016 92.1048 8.27759 91.4456 8.27588Z" fill="#F8F8F8"></path><path d="M103.953 13.8198C101.657 13.8198 100.407 14.8528 99.8663 15.4681V14.529C99.8663 14.4191 99.8226 14.3136 99.7449 14.2359C99.6671 14.1582 99.5617 14.1145 99.4517 14.1145H95.8472C95.7372 14.1145 95.6318 14.1582 95.554 14.2359C95.4763 14.3136 95.4326 14.4191 95.4326 14.529V25.5973C95.4335 25.7067 95.4775 25.8113 95.5552 25.8883C95.6328 25.9653 95.7378 26.0085 95.8472 26.0085H99.4517C99.506 26.009 99.5599 25.9986 99.6101 25.9782C99.6604 25.9577 99.7061 25.9275 99.7447 25.8892C99.7832 25.851 99.8138 25.8055 99.8347 25.7554C99.8555 25.7053 99.8663 25.6516 99.8663 25.5973V18.6707C100.089 18.3784 100.376 18.1417 100.705 17.9793C101.034 17.8169 101.397 17.7332 101.764 17.7348C102.907 17.7348 103.487 18.308 103.487 19.4317V25.5843C103.487 25.6386 103.498 25.6924 103.519 25.7425C103.54 25.7926 103.57 25.8381 103.609 25.8763C103.647 25.9145 103.693 25.9447 103.743 25.9652C103.793 25.9857 103.847 25.996 103.902 25.9956H107.506C107.56 25.996 107.614 25.9857 107.665 25.9652C107.715 25.9447 107.761 25.9145 107.799 25.8763C107.838 25.8381 107.868 25.7926 107.889 25.7425C107.91 25.6924 107.921 25.6386 107.921 25.5843V17.5632C107.921 15.2187 106.441 13.8198 103.953 13.8198Z" fill="#F8F8F8"></path><path d="M60.0698 13.7651C58.8277 13.7651 57.6135 14.1335 56.5807 14.8236C55.5479 15.5136 54.7431 16.4945 54.2679 17.642C53.7927 18.7895 53.6685 20.0521 53.9111 21.2702C54.1536 22.4883 54.752 23.6071 55.6306 24.4851C56.5091 25.3631 57.6284 25.9608 58.8467 26.2028C60.0651 26.4447 61.3278 26.3199 62.4752 25.8441C63.6226 25.3684 64.6031 24.5631 65.2928 23.5301C65.9824 22.4971 66.3501 21.2828 66.3495 20.0408C66.3486 18.3761 65.6867 16.7799 64.5091 15.6031C63.3315 14.4262 61.7347 13.7651 60.0698 13.7651ZM60.0698 22.0971C59.6457 22.0978 59.2308 21.9726 58.8778 21.7374C58.5248 21.5022 58.2495 21.1677 58.0868 20.776C57.924 20.3844 57.8811 19.9532 57.9634 19.5372C58.0458 19.1211 58.2497 18.7388 58.5494 18.4387C58.8492 18.1386 59.2312 17.9341 59.6471 17.8511C60.0631 17.7681 60.4944 17.8104 60.8863 17.9726C61.2782 18.1347 61.6133 18.4095 61.849 18.7621C62.0847 19.1147 62.2106 19.5293 62.2106 19.9534C62.2106 20.5214 61.9851 21.0662 61.5838 21.4681C61.1824 21.87 60.6379 22.0963 60.0698 22.0971Z" fill="#F8F8F8"></path><path d="M115.515 13.7842C114.273 13.7855 113.059 14.1549 112.027 14.8458C110.995 15.5366 110.192 16.5179 109.717 17.6655C109.243 18.8131 109.12 20.0756 109.363 21.2932C109.606 22.5109 110.205 23.6291 111.084 24.5064C111.963 25.3838 113.082 25.9809 114.3 26.2223C115.519 26.4637 116.781 26.3385 117.928 25.8626C119.075 25.3866 120.055 24.5813 120.745 23.5485C121.434 22.5156 121.801 21.3016 121.801 20.0599C121.801 19.2349 121.638 18.4181 121.322 17.656C121.006 16.894 120.543 16.2017 119.959 15.6189C119.375 15.036 118.682 14.5739 117.92 14.2591C117.157 13.9443 116.34 13.7829 115.515 13.7842ZM115.515 22.1162C115.091 22.1162 114.676 21.9905 114.324 21.7551C113.971 21.5197 113.697 21.1851 113.534 20.7936C113.372 20.402 113.329 19.9712 113.412 19.5554C113.494 19.1397 113.698 18.7577 113.998 18.4578C114.297 18.1578 114.679 17.9534 115.094 17.8703C115.51 17.7872 115.941 17.8292 116.333 17.991C116.725 18.1528 117.06 18.427 117.296 18.7791C117.532 19.1312 117.658 19.5454 117.659 19.9692C117.659 20.251 117.604 20.5301 117.496 20.7906C117.389 21.051 117.231 21.2877 117.032 21.4871C116.833 21.6865 116.596 21.8447 116.336 21.9527C116.076 22.0606 115.796 22.1162 115.515 22.1162Z" fill="#F8F8F8"></path><path d="M125.166 10.2319C125.002 9.60458 124.606 9.06314 124.057 8.71782C123.508 8.37249 122.848 8.24925 122.212 8.37318C121.584 8.4831 121.025 8.83764 120.657 9.35907C120.29 9.8805 120.145 10.5263 120.253 11.1548C120.368 11.659 120.647 12.1109 121.046 12.4405C121.445 12.7701 121.941 12.959 122.458 12.9779C122.406 13.1831 122.312 13.3752 122.182 13.5424C122.052 13.7095 121.889 13.8481 121.704 13.9494C121.647 13.9843 121.607 14.0397 121.591 14.1039C121.576 14.168 121.586 14.2358 121.619 14.2927L121.895 14.7007C121.921 14.7652 121.972 14.8169 122.036 14.8447C122.1 14.8725 122.173 14.8743 122.238 14.8496C125.033 13.7227 125.49 11.3362 125.166 10.2319Z" fill="#F8F8F8"></path><path d="M128.46 17.6538C128.46 17.2102 129.023 17.0062 129.755 17.0062C130.894 16.9847 132.008 17.3411 132.923 18.0197C132.97 18.0514 133.023 18.0729 133.079 18.083C133.134 18.093 133.192 18.0913 133.247 18.078C133.302 18.0651 133.354 18.0405 133.399 18.0059C133.445 17.9712 133.482 17.9274 133.509 17.8773L134.727 15.7627C134.779 15.6686 134.794 15.5577 134.767 15.4533C134.739 15.3488 134.673 15.259 134.581 15.2025C133.081 14.266 131.339 13.7909 129.571 13.8359C125.901 13.8359 123.936 15.5619 124.266 18.0456C124.842 22.414 131.618 20.918 131.511 22.3946C131.488 22.7411 130.886 22.9969 129.849 22.9969C128.505 22.9969 126.98 22.3234 126.015 21.7275C125.967 21.6973 125.914 21.6774 125.858 21.669C125.802 21.6607 125.745 21.664 125.691 21.6789C125.637 21.6925 125.586 21.717 125.541 21.751C125.496 21.7849 125.459 21.8276 125.432 21.8765L124.026 24.2177C123.974 24.3088 123.959 24.4163 123.983 24.5185C124.007 24.6207 124.069 24.7099 124.156 24.7682C125.506 25.6782 127.686 26.2902 129.577 26.2902C133.25 26.2902 135.368 24.7132 135.368 22.1226C135.368 17.3397 128.483 18.8228 128.453 17.6409" fill="#F8F8F8"></path><path d="M163.524 25.5814C163.524 25.6914 163.568 25.7968 163.646 25.8745C163.723 25.9523 163.829 25.9959 163.939 25.9959H173.421C173.476 25.9968 173.53 25.9867 173.581 25.9662C173.632 25.9456 173.678 25.9151 173.716 25.8765C173.755 25.8378 173.786 25.7918 173.806 25.7411C173.827 25.6904 173.837 25.6361 173.836 25.5814V22.5796C173.835 22.4702 173.791 22.3656 173.713 22.2886C173.636 22.2116 173.531 22.1683 173.421 22.1683H169.415C169.415 22.1683 172.861 18.2339 173.476 17.5377C173.603 17.422 173.703 17.2807 173.77 17.1232C173.837 16.9657 173.869 16.7956 173.865 16.6245V14.5488C173.865 14.4388 173.821 14.3334 173.744 14.2557C173.666 14.1779 173.56 14.1343 173.451 14.1343H163.939C163.829 14.1343 163.723 14.1779 163.646 14.2557C163.568 14.3334 163.524 14.4388 163.524 14.5488V17.5539C163.524 17.6081 163.535 17.6619 163.556 17.712C163.577 17.7621 163.607 17.8076 163.646 17.8458C163.684 17.884 163.73 17.9143 163.78 17.9347C163.831 17.9552 163.884 17.9655 163.939 17.9651H168.016L163.774 22.8225C163.603 23.0372 163.514 23.306 163.524 23.5802V25.5814Z" fill="#F8F8F8"></path><path d="M175.364 25.5814C175.364 25.6913 175.408 25.7967 175.486 25.8744C175.564 25.9522 175.669 25.9959 175.779 25.9959H185.268C185.323 25.9972 185.377 25.9874 185.428 25.967C185.479 25.9467 185.525 25.9162 185.564 25.8774C185.603 25.8387 185.633 25.7924 185.654 25.7415C185.674 25.6906 185.684 25.6362 185.683 25.5814V22.5795C185.682 22.5251 185.671 22.4713 185.65 22.4211C185.629 22.371 185.598 22.3256 185.559 22.2874C185.52 22.2492 185.474 22.219 185.424 22.1986C185.373 22.1781 185.319 22.1678 185.265 22.1683H181.278C181.278 22.1683 184.685 18.2306 185.304 17.5376C185.43 17.4219 185.529 17.2805 185.596 17.123C185.662 16.9654 185.694 16.7954 185.689 16.6244C185.689 16.5208 185.689 14.5649 185.689 14.5649C185.689 14.455 185.646 14.3495 185.568 14.2718C185.49 14.1941 185.385 14.1504 185.275 14.1504H175.763C175.658 14.1544 175.559 14.1976 175.486 14.2715C175.412 14.3453 175.368 14.4443 175.364 14.5487V17.5538C175.364 17.6081 175.375 17.6618 175.396 17.7119C175.417 17.762 175.448 17.8075 175.486 17.8457C175.525 17.884 175.57 17.9142 175.621 17.9347C175.671 17.9551 175.725 17.9655 175.779 17.965H179.856L175.617 22.8224C175.444 23.0359 175.354 23.3053 175.364 23.5801V25.5814Z" fill="#F8F8F8"></path><path d="M193.193 22.3268C192.725 22.3262 192.267 22.1867 191.877 21.926C191.488 21.6653 191.185 21.295 191.006 20.862C190.827 20.429 190.78 19.9527 190.872 19.4932C190.963 19.0337 191.189 18.6116 191.52 18.2803C191.852 17.949 192.274 17.7233 192.733 17.6318C193.193 17.5402 193.669 17.5869 194.102 17.7659C194.535 17.9449 194.906 18.2482 195.166 18.6375C195.427 19.0268 195.567 19.4847 195.567 19.9532C195.567 20.5827 195.317 21.1865 194.872 21.6316C194.427 22.0767 193.823 22.3268 193.193 22.3268ZM199.586 14.1049H195.982C195.872 14.1049 195.766 14.1486 195.689 14.2263C195.611 14.3041 195.567 14.4095 195.567 14.5194V15.2189C194.603 14.3089 193.33 13.7975 192.005 13.7876C188.905 13.7876 186.395 16.5984 186.395 20.0665C186.395 23.5347 188.905 26.3422 192.005 26.3422C193.33 26.3322 194.602 25.8222 195.567 24.9142V25.5845C195.567 25.6388 195.578 25.6925 195.599 25.7426C195.62 25.7927 195.65 25.8382 195.689 25.8764C195.727 25.9147 195.773 25.9449 195.823 25.9654C195.874 25.9858 195.927 25.9962 195.982 25.9957H199.586C199.696 25.9957 199.801 25.9525 199.878 25.8755C199.956 25.7985 200 25.6939 200.001 25.5845V14.5194C200.001 14.4095 199.957 14.3041 199.879 14.2263C199.802 14.1486 199.696 14.1049 199.586 14.1049Z" fill="#F8F8F8"></path><path d="M161.61 14.1343H158.015C157.906 14.1351 157.801 14.1791 157.723 14.2566C157.646 14.3342 157.602 14.4391 157.601 14.5488V25.5847C157.602 25.694 157.646 25.7986 157.723 25.8757C157.801 25.9527 157.906 25.9959 158.015 25.9959H161.61C161.664 25.9964 161.718 25.986 161.768 25.9656C161.819 25.9451 161.864 25.9149 161.903 25.8766C161.942 25.8384 161.972 25.7929 161.993 25.7428C162.014 25.6927 162.025 25.639 162.025 25.5847V14.5488C162.025 14.4388 161.981 14.3334 161.903 14.2557C161.825 14.1779 161.72 14.1343 161.61 14.1343Z" fill="#F8F8F8"></path><path d="M159.819 8.31494C159.329 8.31494 158.849 8.46042 158.441 8.73298C158.033 9.00554 157.715 9.39294 157.527 9.84619C157.34 10.2994 157.291 10.7982 157.386 11.2793C157.482 11.7605 157.718 12.2025 158.065 12.5494C158.412 12.8963 158.854 13.1325 159.335 13.2283C159.817 13.324 160.315 13.2748 160.769 13.0871C161.222 12.8994 161.609 12.5814 161.882 12.1735C162.155 11.7656 162.3 11.286 162.3 10.7954C162.298 10.1381 162.037 9.50816 161.572 9.04335C161.107 8.57854 160.477 8.31665 159.819 8.31494Z" fill="#F8F8F8"></path><path d="M149.316 17.5601H148.41V13.8232H149.346C151.198 13.8232 151.726 14.7331 151.726 15.5718C151.726 16.5983 151.266 17.5601 149.316 17.5601ZM153.957 10.8505C152.438 9.79804 150.877 9.55518 148.426 9.55518L143.817 9.57461C143.714 9.57546 143.615 9.61712 143.542 9.69051C143.469 9.7639 143.429 9.86307 143.429 9.96643V25.6039C143.429 25.7078 143.47 25.8074 143.543 25.8809C143.617 25.9544 143.717 25.9957 143.82 25.9957H148.014C148.119 25.9957 148.219 25.9545 148.293 25.8811C148.367 25.8077 148.409 25.7081 148.41 25.6039V21.6726C150.56 21.6726 152.743 21.65 154.359 20.2511C155.486 19.2796 156.331 17.7058 156.331 15.5783C156.331 13.9333 155.492 11.9094 153.957 10.8505Z" fill="#F8F8F8"></path><path d="M201.827 16.5658C201.582 16.5664 201.343 16.4944 201.139 16.3587C200.935 16.223 200.776 16.0298 200.682 15.8037C200.588 15.5775 200.563 15.3285 200.611 15.0883C200.658 14.848 200.776 14.6273 200.949 14.4541C201.122 14.2809 201.343 14.163 201.584 14.1154C201.824 14.0678 202.073 14.0926 202.299 14.1866C202.525 14.2806 202.718 14.4397 202.854 14.6436C202.99 14.8475 203.062 15.0871 203.061 15.332C203.06 15.659 202.93 15.9723 202.699 16.2035C202.468 16.4347 202.154 16.565 201.827 16.5658ZM201.827 14.2828C201.621 14.286 201.42 14.3501 201.249 14.467C201.079 14.584 200.947 14.7485 200.87 14.9401C200.793 15.1317 200.774 15.3418 200.816 15.5441C200.858 15.7464 200.958 15.9318 201.105 16.0772C201.252 16.2226 201.438 16.3214 201.641 16.3613C201.843 16.4012 202.053 16.3805 202.244 16.3016C202.435 16.2227 202.599 16.0892 202.714 15.9179C202.829 15.7466 202.892 15.545 202.893 15.3385C202.893 15.1998 202.865 15.0625 202.811 14.9346C202.757 14.8068 202.678 14.6911 202.579 14.5942C202.48 14.4973 202.362 14.4213 202.233 14.3706C202.104 14.3199 201.966 14.2956 201.827 14.299V14.2828ZM202.151 16.0444L201.785 15.4842H201.539V16.0444H201.342V14.6229H201.921C201.98 14.6198 202.039 14.6286 202.094 14.6488C202.15 14.6689 202.201 14.7 202.244 14.7402C202.287 14.7804 202.322 14.8288 202.346 14.8826C202.37 14.9365 202.383 14.9946 202.384 15.0535C202.386 15.156 202.35 15.2555 202.283 15.3331C202.216 15.4107 202.123 15.461 202.022 15.4745L202.401 16.0412L202.151 16.0444ZM201.921 14.8074H201.542V15.3094H201.921C201.957 15.3134 201.992 15.3099 202.026 15.2991C202.06 15.2883 202.091 15.2705 202.118 15.2468C202.145 15.2231 202.166 15.1941 202.18 15.1616C202.195 15.1292 202.202 15.094 202.202 15.0584C202.202 15.0228 202.195 14.9876 202.18 14.9552C202.166 14.9227 202.145 14.8937 202.118 14.87C202.091 14.8463 202.06 14.8285 202.026 14.8177C201.992 14.8069 201.957 14.8034 201.921 14.8074Z" fill="#F8F8F8"></path></svg>

      <svg className='logotype__smallScreen' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.1085 14.473L35.5353 0.904839C35.2534 0.618291 34.9173 0.390707 34.5465 0.235357C34.1758 0.0800074 33.7778 0 33.3757 0C32.9737 0 32.5757 0.0800074 32.2049 0.235357C31.8341 0.390707 31.498 0.618291 31.2161 0.904839L19.8566 12.2872L0.900594 31.2309C0.615252 31.5134 0.388748 31.8497 0.234168 32.2202C0.0795892 32.5908 0 32.9883 0 33.3897C0 33.7912 0.0795892 34.1887 0.234168 34.5592C0.388748 34.9298 0.615252 35.266 0.900594 35.5485L14.4791 49.0952C14.761 49.3817 15.0972 49.6093 15.4679 49.7646C15.8387 49.92 16.2367 50 16.6387 50C17.0408 50 17.4388 49.92 17.8096 49.7646C18.1803 49.6093 18.5165 49.3817 18.7984 49.0952L35.7621 32.1106L49.1085 18.7637C49.391 18.4824 49.6153 18.1481 49.7683 17.7799C49.9212 17.4118 50 17.017 50 16.6184C50 16.2197 49.9212 15.825 49.7683 15.4568C49.6153 15.0887 49.391 14.7544 49.1085 14.473Z" fill="#F8F8F8"></path><path d="M48.1531 15.439L34.5692 1.86538C34.2545 1.55196 33.8283 1.37598 33.3841 1.37598C32.9399 1.37598 32.5137 1.55196 32.199 1.86538L17.5137 16.5454L33.4894 32.4829L48.1531 17.8245C48.3108 17.6684 48.436 17.4826 48.5214 17.2779C48.6069 17.0732 48.6508 16.8536 48.6508 16.6317C48.6508 16.4099 48.6069 16.1903 48.5214 15.9856C48.436 15.7808 48.3108 15.5951 48.1531 15.439ZM36.1889 19.3626C35.5455 20.0071 34.6985 20.4085 33.7923 20.4985C32.886 20.5886 31.9765 20.3616 31.2189 19.8564C30.4612 19.3512 29.9023 18.599 29.6373 17.7279C29.3724 16.8569 29.4178 15.9209 29.7659 15.0796C30.114 14.2383 30.7432 13.5437 31.5462 13.1143C32.3492 12.6848 33.2764 12.5469 34.1697 12.7243C35.063 12.9016 35.8672 13.3832 36.445 14.0869C37.0229 14.7905 37.3388 15.6727 37.3389 16.5832C37.3404 17.0994 37.2395 17.6109 37.0422 18.0879C36.8448 18.565 36.5548 18.9983 36.1889 19.3626Z" fill="#E31837"></path><path d="M1.86068 32.1921C1.54714 32.5067 1.37109 32.9327 1.37109 33.3768C1.37109 33.8209 1.54714 34.2469 1.86068 34.5615L15.4392 48.1351C15.5947 48.2909 15.7794 48.4145 15.9828 48.4989C16.1861 48.5833 16.4041 48.6267 16.6243 48.6267C16.8445 48.6267 17.0625 48.5833 17.2659 48.4989C17.4692 48.4145 17.6539 48.2909 17.8094 48.1351L32.4839 33.4766L16.5352 17.5229L1.86068 32.1921ZM13.6198 36.0996C12.9764 36.744 12.1294 37.1455 11.2231 37.2355C10.3168 37.3256 9.40736 37.0986 8.64971 36.5934C7.89206 36.0882 7.33313 35.3359 7.06819 34.4649C6.80325 33.5939 6.84869 32.6579 7.19677 31.8166C7.54485 30.9753 8.17403 30.2807 8.97706 29.8512C9.7801 29.4217 10.7073 29.2839 11.6006 29.4613C12.4939 29.6386 13.298 30.1202 13.8759 30.8238C14.4538 31.5275 14.7697 32.4097 14.7697 33.3201C14.7704 33.8363 14.6691 34.3475 14.4718 34.8244C14.2744 35.3014 13.9849 35.7347 13.6198 36.0996ZM19.6019 30.7026C20.2453 30.0621 21.0909 29.6644 21.9947 29.5772C22.8985 29.4901 23.8046 29.7189 24.5586 30.2246C25.3126 30.7303 25.8678 31.4818 26.1298 32.3508C26.3917 33.2199 26.3441 34.1529 25.9951 34.9909C25.6461 35.8288 25.0173 36.5199 24.2158 36.9464C23.4142 37.3728 22.4896 37.5083 21.5993 37.3297C20.7091 37.1512 19.9083 36.6696 19.3334 35.967C18.7585 35.2644 18.4451 34.3843 18.4465 33.4766C18.4466 32.9601 18.5487 32.4487 18.747 31.9718C18.9452 31.4948 19.2358 31.0616 19.6019 30.6972V30.7026Z" fill="#006491"></path><path d="M24.6251 48.5396V46.3808H23.8477V45.8896H25.9641V46.3862H25.192V48.545L24.6251 48.5396Z" fill="#F8F8F8"></path><path d="M28.6311 48.5396V46.629L27.8752 48.5396H27.6323L26.8872 46.629V48.5396H26.3203V45.8896H27.1086L27.7511 47.5465L28.3989 45.8896H29.171V48.5396H28.6311Z" fill="#F8F8F8"></path></svg>
    </Link>
  )
}

export default Logotype