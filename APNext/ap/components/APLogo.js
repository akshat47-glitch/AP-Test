function APLogo(props) {
  return props.language == "english" ? (
    <img
      class="absolute right-1 bottom-1 object-contain logo-height-base"
      src="https://acharyaprashant.org/images/ic_apsignature_english.png"
      alt="AP Name Logo"
      style={{ height: 26 }}
    />
  ) : (
    <img
      class="absolute right-1 bottom-1 object-contain logo-height-base"
      src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
      alt="AP Name Logo"
      style={{ height: 26 }}
    />
  );
}
export default APLogo;
