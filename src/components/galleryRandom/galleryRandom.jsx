import "./galleryRandom.scss";
export default function Info() {
  return (
    <div className="info" id="info">
      <br></br>
      <table>
        {(() => {
          const options = [];
          for (let i = 1; i <= 6; i++) {
            options.push(
              <tr>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 1) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 2) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 3) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 4) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 5) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 6) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 7) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 8) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 9) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 10) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 11) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 12) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 13) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 14) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 15) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 16) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 17) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 18) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 19) + ".jpg"}
                    width="100"
                  />
                </td>
                <td>
                  <img
                    src={"assets/nft-karma/0" + (i * 10 + 20) + ".jpg"}
                    width="100"
                  />
                </td>
              </tr>
            );
          }
          return options;
        })()}
      </table>
    </div>
  );
}
