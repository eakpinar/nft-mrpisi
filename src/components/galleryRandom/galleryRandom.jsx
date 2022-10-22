import "./galleryRandom.scss";
export default function GalleryRandom() {
  var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113],//all numbers to be randomized
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
  return (
    <div className="galleryRandom" id="galleryRandom">
      <br></br>
      <table>
        <tbody>
          {(() => {
            const options = [];
            for (let i = 0; i <= 8; i++) {
              options.push(
                <tr key={i+"tr"}>
                  {(() => {
                    const optionsTD = [];
                    for (let j = 1; j <= 20; j++) {
                      optionsTD.push(
                        <td key={i * 10 + j + "td"}>
                          <img
                            src={"assets/nft-karma/0" + ranNums[i * 10 + j] + ".jpg"}
                            width="50"
                            alt="sell"
                          />
                        </td>
                      );
                    }
                    return optionsTD;
                  })()}
                </tr>
              );
            }
            return options;
          })()}
        </tbody>
      </table>
    </div>
  );
}
