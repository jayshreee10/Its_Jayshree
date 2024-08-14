"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/magic/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 6.8537c-.2508.4312-.3126.9176-.1983 1.3817.1152.4638.43.886.8662 1.2237.4367.3374.9517.5646 1.4884.6368.436.0708.8752.0163 1.2815-.1381.4064-.154.8011-.4518 1.1808-.7469.3793-.2954.7582-.5642 1.1437-.8457.3851-.2819.7538-.5786 1.1189-.8939.3757-.3232.7305-.6702 1.0932-1.0213a5.9793 5.9793 0 0 0 1.3323-1.6852 5.9348 5.9348 0 0 0 .6972-2.2179 5.9656 5.9656 0 0 0-.1452-2.5103zM12.342 18.258c-.269.178-.5586.3356-.8723.4513-.3324.1234-.6812.1841-1.0312.1862-.3506.0021-.6847-.0556-1.0246-.1862a2.7224 2.7224 0 0 1-.8611-.4513c-.2747-.2227-.4968-.4836-.6747-.7726a2.7736 2.7736 0 0 1-.2456-2.2449c.1881-.3258.4305-.6236.7063-.8565.4698-.3566.9733-.6085 1.5271-.7094.5532-.1017 1.1266.0485 1.6572.2967a2.6362 2.6362 0 0 1 .8031.4711c.285.2013.5347.4308.7383.6831.2037.2526.3979.5243.5657.8128a2.751 2.751 0 0 1-.0786 2.0926c-.1286.2993-.3125.5778-.5494.8271a2.7755 2.7755 0 0 1-1.0364.6864c-.4421.0994-.8857.0883-1.3161-.0514a2.7016 2.7016 0 0 1-1.2436-.7891c-.1456-.1327-.2966-.2804-.4285-.4394-.1324-.1591-.2638-.3232-.3951-.4902-.2295-.2879-.4752-.5686-.7174-.8564a2.852 2.852 0 0 1-.6953-1.1066 2.8341 2.8341 0 0 1 .4387-2.2679c.3347-.3777.7035-.7315 1.0954-.9603.3949-.2285.8272-.3815 1.2606-.4547.4338-.0766.8795-.0415 1.3068.0932.4184.1334.8215.314.1198.8178.0217.057.0425.1176.0603.1772.0562.3457-.0421.6906-.1615 1.0178-.3386.7482-.6936 1.5026-1.3982 2.2877-2.0712.1573-.0935.3124-.1897.4701-.2915.2374-.1337.4702-.2754.6981-.426.2281-.1502.4535-.3013.6711-.4576.2219-.156.4363-.3169.6388-.4935a2.7875 2.7875 0 0 1 1.4223-.7323 2.7488 2.7488 0 0 1 2.1037.3023c.3206.2164.5635.519.734.8469a2.8241 2.8241 0 0 1 .2786 1.1835 2.8166 2.8166 0 0 1-.7866 1.9814 2.7968 2.7968 0 0 1-2.0467.7196c-.6541-.0476-1.3012-.268-1.9036-.6194-.6002-.3413-1.1685-.7616-1.7575-1.1248-.5854-.3714-1.1447-.7227-1.7213-1.0782a2.7555 2.7555 0 0 1-.9937-.8814c-.2135-.2768-.3911-.5697-.5372-.8842a2.7863 2.7863 0 0 1-.0969-1.1028c.0681-.3672.2101-.7316.4085-1.0627a2.7838 2.7838 0 0 1 .7287-1.0333c.3224-.2642.6726-.5376 1.0187-.7843.3426-.2436.6897-.4921 1.0486-.7066.3616-.2138.7108-.4397 1.0765-.6025.2448-.1095.4938-.2137.7431-.2938.3477-.0945.6923-.0288 1.0413.0682.3294.0934.6521.225.9496.3966a2.7467 2.7467 0 0 1 1.4281.6398 2.7732 2.7732 0 0 1 .7084 1.0847c.1126.305.2282.6292.3284.944.0284.1236.0591.2478.0806.3735.0515.3635.0682.7438.0536 1.1068-.0776.6831-.1835 1.3625-.3576 2.0218-.0555.2791-.1134.5572-.1996.8316a2.8171 2.8171 0 0 1-.7834 1.6629c-.3141.3844-.6421.7541-.9458 1.1185-.3192.3872-.6649.7495-1.0135 1.1194-.5834.5653-1.1387 1.1213-1.7574 1.6581-.6249.5432-1.2397 1.0847-1.8555 1.6196a2.7686 2.7686 0 0 1-1.3482.4226c-.4016-.0044-.7968-.1493-1.1468-.3641-.3471-.2063-.6444-.4965-.8494-.8455a2.7733 2.7733 0 0 1-.4715-.7095c-.2544-.6636-.3391-1.3697-.3817-2.0774a2.7783 2.7783 0 0 1 .1067-1.0659c.2128-.8527.6257-1.6715 1.2223-2.3387.5868-.6447 1.2138-1.2823 1.8926-1.7329a2.7172 2.7172 0 0 1 1.3975-.5016c.3704.0701.7357.2118 1.0777.3568.3378.1557.6474.3827.9535.6138.3067.232.5962.4788.8577.7528.2622.266.4579.5701.5825.8952.1251.3284.2122.6589.289.9878.071.3343.1186.6758.125.9868-.01.4256-.0931.8432-.2723 1.2542-.0958.1915-.2387.3496-.4086.5105-.229.2334-.4716.4592-.7334.6604a2.7042 2.7042 0 0 1-1.7284.5029z" fill="#000000" />
    </svg>
  ),
  zapier: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-zapier"
    >
      <path d="M11.97 1.6l.929 4.25a1 1 0 0 0 1.149.78l3.82-1.204a1 1 0 0 1 1.231.646l2.388 6.572a1 1 0 0 1-.594 1.174l-4.84 2.333a1 1 0 0 0-.447 1.217l2.697 7.054a1 1 0 0 1-1.407 1.22l-4.54-2.26a1 1 0 0 0-1.264.373L8.196 21.96a1 1 0 0 1-1.712-.764l-2.676-8.113a1 1 0 0 0-.602-.642L1.11 7.795a1 1 0 0 1 .626-1.734l4.323-1.136a1 1 0 0 0 .667-1.305L6.834 1.5a1 1 0 0 1 1.553-.747l3.58 1.848a1 1 0 0 0 .948-.049z" />
    </svg>
  ),
  intercom: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-intercom"
    >
      <path d="M14 1.5a6.5 6.5 0 0 1 6.5 6.5v7a6.5 6.5 0 0 1-6.5 6.5H7v1.5h6.5a6.5 6.5 0 0 1 6.5-6.5v-7a6.5 6.5 0 0 1-6.5-6.5H7V7H1v7a6.5 6.5 0 0 0 6.5 6.5H14v1.5H7a6.5 6.5 0 0 1-6.5-6.5v-7A6.5 6.5 0 0 1 7 1.5h7z" />
    </svg>
  ),
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-notion"
    >
      <path d="M14.8 1.5H9.2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5.6a1 1 0 0 0 1-1V2.5a1 1 0 0 0-1-1zM9.2 2h5.6v16H9.2V2zm0 16h5.6V2H9.2v16z" />
    </svg>
  ),
  slack: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-slack"
    >
      <path d="M12 22.5A1.5 1.5 0 0 1 10.5 24h-7a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 3.5 14h7A1.5 1.5 0 0 1 12 15.5v7zm-1-6h-6v-6h6zm9 6A1.5 1.5 0 0 1 19.5 24h-7A1.5 1.5 0 0 1 11 22.5v-7A1.5 1.5 0 0 1 12.5 9h7A1.5 1.5 0 0 1 21 10.5v7zM13 12v6h6v-6zm-6-1V5h6v6zm7-7V2h-6v6z" />
    </svg>
  ),
  trello: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-trello"
    >
      <path d="M6 4H5.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1H6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM6 11H5.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM6 18H5.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM13 4h-1.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM13 11h-1.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM13 18h-1.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM20 4h-1.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM20 11h-1.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM20 18h-1.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
    </svg>
  ),
  twitter: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-twitter"
    >
      <path d="M23 3a10.872 10.872 0 0 1-3.14.86 4.444 4.444 0 0 0 1.946-2.45 8.873 8.873 0 0 1-2.813 1.074A4.433 4.433 0 0 0 16.716 2a4.43 4.43 0 0 0-4.43 4.43c0 .347.039.685.115 1.01A12.586 12.586 0 0 1 1.671 1.545a4.43 4.43 0 0 0 1.368 5.897A4.446 4.446 0 0 1 .88 7.6v.057a4.433 4.433 0 0 0 3.556 4.345 4.424 4.424 0 0 1-2.02.077 4.434 4.434 0 0 0 4.14 3.08A8.886 8.886 0 0 1 0 19.006a8.874 8.874 0 0 0 4.81 1.407A8.84 8.84 0 0 0 10.874 18c5.174 0 8.123-4.287 8.123-8.006 0-.122-.003-.244-.01-.365A5.796 5.796 0 0 0 23 3z" />
    </svg>
  ),
  vimeo: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-vimeo"
    >
      <path d="M2 2h20v20H2z" />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-whatsapp"
    >
      <path d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm6.6 9.19l-.019.002a2.41 2.41 0 0 0-1.68.638L5.28 12.1c-.425.424-.683 1.027-.683 1.64v.038a4.45 4.45 0 0 0 1.384 3.308l.05.047.053-.034c.596-.38 1.242-.616 1.922-.688a3.88 3.88 0 0 1 2.132.348 4.267 4.267 0 0 0 2.22 2.24c.756.362 1.598.524 2.44.458a4.053 4.053 0 0 0 2.135-.758c.194-.175.368-.38.51-.604.129-.203.24-.418.317-.637.055-.178.07-.37.045-.558-.072-.428-.43-.803-.817-1.042a3.79 3.79 0 0 0-.883-.452 4.54 4.54 0 0 0-1.276-.161c-.274.014-.549.053-.819.115-.345.07-.688.206-1 .388-.355.175-.676.406-.963.678-.234.227-.457.465-.668.724-.026.029-.049.061-.071.092-.167.254-.286.528-.38.814-.059.22-.076.446-.053.674.085.453.451.814.892.996.373.146.769.214 1.16.171.2-.021.394-.073.582-.147a4.21 4.21 0 0 0 1.715-1.02 4.09 4.09 0 0 0 .53-.58 3.736 3.736 0 0 0 .158-.272c.085-.163.161-.329.222-.498a2.41 2.41 0 0 0 .126-.5v-.005c.023-.069.04-.137.057-.205a1.98 1.98 0 0 0-.118-1.04c-.115-.236-.284-.45-.48-.642a3.98 3.98 0 0 0-1.535-1.015 3.92 3.92 0 0 0-2.296-.244 2.65 2.65 0 0 0-1.113.61c-.32.324-.66.64-1.032.895-.237.193-.484.37-.748.537-.261.161-.527.318-.79.473a4.158 4.158 0 0 0-2.342-.687z" />
    </svg>
  ),
  youtube: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-youtube"
    >
      <path d="M22.54 6.42a2.4 2.4 0 0 0-1.68-1.68C19.38 4 12 4 12 4s-7.38 0-8.86.74a2.4 2.4 0 0 0-1.68 1.68C1.5 7.93 1.5 12 1.5 12s0 4.07.74 5.58a2.4 2.4 0 0 0 1.68 1.68C4.62 20 12 20 12 20s7.38 0 8.86-.74a2.4 2.4 0 0 0 1.68-1.68C22.5 16.07 22.5 12 22.5 12s0-4.07-.74-5.58zM10 15V9l6 3-6 3z" />
    </svg>
  ),
};

const icons = Object.keys(IconComponents);

export default function SocialMediaIcons() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {icons.map((key) => {
        const IconComponent = IconComponents[key];
        return (
          <a href={`#${key.toLowerCase()}`} key={key} aria-label={key}>
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}
