import { ComponentProps } from 'react'

export function Logo(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={215}
      height={56}
      viewBox="0 0 215 56"
      fill="none"
      {...props}
    >
      <path
        d="M67.769 38.945c-.554 0-.992-.155-1.314-.465-.303-.328-.455-.793-.455-1.395V21.298c0-.602.152-1.058.456-1.368.321-.328.777-.492 1.366-.492h9.352c.464 0 .813.118 1.045.355.232.238.348.575.348 1.013 0 .456-.116.811-.348 1.067-.232.237-.58.355-1.045.355H69.43v5.445h7.181c.447 0 .786.119 1.018.356.25.237.376.574.376 1.012 0 .456-.126.812-.376 1.067-.232.237-.571.356-1.018.356H69.43v6.62c0 1.241-.554 1.861-1.662 1.861zM83.46 38.918c-.537 0-.947-.164-1.233-.493-.286-.328-.43-.784-.43-1.367V27.015c0-.601.144-1.057.43-1.368.285-.328.696-.492 1.232-.492s.947.164 1.233.492c.304.31.455.767.455 1.368v10.041c0 .584-.143 1.04-.428 1.368-.286.329-.706.493-1.26.493zm0-16.306c-.626 0-1.117-.155-1.474-.466-.34-.328-.51-.775-.51-1.34 0-.584.17-1.03.51-1.34.357-.311.848-.466 1.473-.466.643 0 1.135.155 1.474.465.34.31.51.757.51 1.34 0 .566-.17 1.013-.51 1.341-.34.31-.83.465-1.474.465zM90.29 38.945c-.537 0-.948-.146-1.234-.438-.285-.31-.428-.747-.428-1.313V26.852c0-.565.143-.994.428-1.286.286-.291.688-.437 1.206-.437s.92.145 1.206.437c.286.292.429.72.429 1.286v1.86l-.295-.683c.393-.967 1-1.697 1.822-2.19.84-.51 1.787-.765 2.84-.765 1.055 0 1.921.2 2.6.602.679.401 1.188 1.012 1.527 1.833.34.802.509 1.824.509 3.064v6.621c0 .566-.143 1.003-.428 1.313-.286.292-.697.438-1.233.438-.536 0-.956-.146-1.26-.438-.285-.31-.428-.747-.428-1.313v-6.457c0-1.04-.197-1.796-.59-2.27-.375-.475-.964-.712-1.768-.712-.983 0-1.769.32-2.358.958-.572.62-.858 1.45-.858 2.49v5.991c0 1.168-.563 1.751-1.688 1.751zM109.34 39c-1.143 0-2.153-.283-3.028-.848-.857-.566-1.527-1.368-2.01-2.408-.482-1.058-.723-2.298-.723-3.72 0-1.442.241-2.673.723-3.694.483-1.04 1.153-1.842 2.01-2.408.875-.565 1.885-.848 3.028-.848 1.09 0 2.036.273 2.84.82.822.548 1.376 1.268 1.662 2.162h-.295v-7.114c0-.565.143-.994.429-1.285.285-.292.696-.438 1.232-.438s.947.146 1.233.438c.304.291.455.72.455 1.285v16.252c0 .566-.142 1.003-.428 1.313-.286.292-.697.438-1.233.438-.536 0-.947-.146-1.233-.438-.285-.31-.428-.747-.428-1.313V35.06l.294.821a3.996 3.996 0 01-1.634 2.27c-.822.566-1.786.849-2.894.849zm.938-2.6c.661 0 1.241-.163 1.742-.492.5-.328.884-.811 1.152-1.45.286-.656.429-1.468.429-2.435 0-1.459-.304-2.544-.912-3.256-.607-.73-1.411-1.094-2.411-1.094-.661 0-1.242.164-1.742.493-.5.31-.893.793-1.179 1.45-.268.638-.402 1.44-.402 2.407 0 1.441.304 2.536.911 3.283.608.73 1.411 1.095 2.412 1.095zM120.718 38.918c-.358 0-.643-.082-.858-.246a.952.952 0 01-.375-.657c-.036-.273.018-.584.161-.93l7.262-16.635c.178-.438.402-.748.67-.93.285-.183.598-.274.937-.274.322 0 .617.091.885.274.285.182.518.492.696.93l7.262 16.635c.161.346.223.666.188.957a.988.988 0 01-.349.657c-.196.146-.473.219-.83.219-.393 0-.706-.1-.938-.301-.232-.2-.438-.51-.617-.93l-1.875-4.433 1.259.767h-11.415l1.233-.767-1.849 4.433c-.179.438-.375.757-.59.957-.214.183-.5.274-.857.274zm7.744-16.334l-4.046 9.795-.67-.657h9.459l-.617.657-4.073-9.795h-.053zM142.19 38.945c-.554 0-.991-.155-1.313-.465-.304-.328-.455-.793-.455-1.395V21.298c0-.602.151-1.058.455-1.368.322-.328.777-.492 1.367-.492h9.352c.464 0 .812.118 1.045.355.232.238.348.575.348 1.013 0 .456-.116.811-.348 1.067-.233.237-.581.355-1.045.355h-7.745v5.445h7.182c.446 0 .786.119 1.018.356.25.237.375.574.375 1.012 0 .456-.125.812-.375 1.067-.232.237-.572.356-1.018.356h-7.182v6.62c0 1.241-.553 1.861-1.661 1.861zM156.6 38.945c-.554 0-.983-.146-1.286-.438-.286-.31-.429-.747-.429-1.313V26.852c0-.565.143-.994.429-1.286.285-.291.687-.437 1.205-.437.519 0 .92.145 1.206.437.286.292.429.72.429 1.286v1.724h-.268c.25-1.095.741-1.924 1.474-2.49.732-.565 1.706-.903 2.921-1.012.375-.037.67.064.884.3.232.22.366.566.402 1.04.036.456-.072.83-.322 1.122-.232.274-.589.438-1.072.493l-.589.054c-1.09.11-1.912.456-2.465 1.04-.554.566-.831 1.368-.831 2.408v5.663c0 .566-.143 1.003-.429 1.313-.286.292-.705.438-1.259.438zM167.04 38.918c-.536 0-.947-.164-1.233-.493-.286-.328-.429-.784-.429-1.367V27.015c0-.601.143-1.057.429-1.368.286-.328.697-.492 1.233-.492.536 0 .946.164 1.232.492.304.31.456.767.456 1.368v10.041c0 .584-.143 1.04-.429 1.368-.286.329-.706.493-1.259.493zm0-16.306c-.626 0-1.117-.155-1.474-.466-.34-.328-.509-.775-.509-1.34 0-.584.169-1.03.509-1.34.357-.311.848-.466 1.474-.466.643 0 1.134.155 1.473.465.34.31.51.757.51 1.34 0 .566-.17 1.013-.51 1.341-.339.31-.83.465-1.473.465zM178.666 39c-1.483 0-2.76-.283-3.832-.848a6.047 6.047 0 01-2.492-2.408c-.572-1.04-.857-2.27-.857-3.693 0-1.387.276-2.6.83-3.64.572-1.039 1.349-1.85 2.332-2.434 1-.602 2.134-.903 3.403-.903.929 0 1.759.155 2.492.465.75.31 1.384.757 1.902 1.34.536.584.938 1.296 1.206 2.135.286.82.429 1.75.429 2.79 0 .329-.116.584-.349.767-.214.164-.527.246-.937.246h-8.602v-1.97h7.53l-.429.41c0-.839-.125-1.541-.375-2.107-.232-.565-.581-.994-1.045-1.285-.447-.31-1.01-.465-1.688-.465-.751 0-1.394.182-1.93.547-.518.346-.92.848-1.206 1.504-.267.639-.401 1.405-.401 2.299v.191c0 1.496.339 2.618 1.018 3.365.696.73 1.715 1.095 3.055 1.095.464 0 .982-.055 1.554-.164a5.921 5.921 0 001.661-.63c.375-.218.706-.31.991-.273.286.018.51.118.67.3.179.183.286.411.322.685.036.255-.018.52-.161.793-.125.274-.348.51-.67.712-.625.4-1.348.702-2.17.902-.804.183-1.554.274-2.251.274zM188.393 38.945c-.536 0-.947-.146-1.233-.438-.286-.31-.429-.747-.429-1.313V26.852c0-.565.143-.994.429-1.286.286-.291.688-.437 1.206-.437s.92.145 1.206.437c.285.292.428.72.428 1.286v1.86l-.294-.683c.393-.967 1-1.697 1.822-2.19.839-.51 1.786-.765 2.84-.765 1.054 0 1.921.2 2.599.602.679.401 1.188 1.012 1.528 1.833.339.802.509 1.824.509 3.064v6.621c0 .566-.143 1.003-.429 1.313-.286.292-.697.438-1.233.438-.535 0-.955-.146-1.259-.438-.286-.31-.429-.747-.429-1.313v-6.457c0-1.04-.196-1.796-.589-2.27-.375-.475-.965-.712-1.769-.712-.982 0-1.768.32-2.358.958-.571.62-.857 1.45-.857 2.49v5.991c0 1.168-.563 1.751-1.688 1.751zM207.444 39c-1.144 0-2.153-.283-3.028-.848-.858-.566-1.528-1.368-2.01-2.408-.482-1.058-.724-2.298-.724-3.72 0-1.442.242-2.673.724-3.694.482-1.04 1.152-1.842 2.01-2.408.875-.565 1.884-.848 3.028-.848 1.089 0 2.036.273 2.84.82.822.548 1.375 1.268 1.661 2.162h-.294v-7.114c0-.565.142-.994.428-1.285.286-.292.697-.438 1.233-.438.536 0 .947.146 1.232.438.304.291.456.72.456 1.285v16.252c0 .566-.143 1.003-.429 1.313-.286.292-.696.438-1.232.438s-.947-.146-1.233-.438c-.286-.31-.429-.747-.429-1.313V35.06l.295.821a4.005 4.005 0 01-1.634 2.27c-.822.566-1.787.849-2.894.849zm.937-2.6c.661 0 1.242-.163 1.742-.492.5-.328.884-.811 1.152-1.45.286-.656.429-1.468.429-2.435 0-1.459-.304-2.544-.911-3.256-.607-.73-1.411-1.094-2.412-1.094-.661 0-1.241.164-1.741.493-.501.31-.894.793-1.179 1.45-.268.638-.402 1.44-.402 2.407 0 1.441.303 2.536.911 3.283.607.73 1.411 1.095 2.411 1.095zM34.261 52.761c-3.834 4.22-10.58 4.26-14.464.087-1.734-1.864-.387-4.85 2.196-4.866l10.013-.06c2.584-.015 3.967 2.954 2.255 4.84z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.692 47.578c-2.022 1.57-4.877 1.052-6.589-.844l-5.437-6.024c-2.192-2.427-6.038-2.427-8.23 0l-5.885 6.52c-1.668 1.848-4.43 2.396-6.456.937C4.369 43.322 0 35.483 0 26.638 0 11.926 12.088 0 27 0s27 11.926 27 26.638c0 8.496-4.03 16.062-10.308 20.94zM18.849 29.623l5.103 5.958a3.982 3.982 0 006.096 0l5.103-5.958c1.638-1.913.794-4.94-1.577-5.654a22.776 22.776 0 00-13.148 0c-2.37.714-3.215 3.741-1.577 5.654zM19 17a4 4 0 11-8 0 4 4 0 018 0zm20 4a4 4 0 100-8 4 4 0 000 8z"
        fill="#fff"
      />
    </svg>
  )
}
