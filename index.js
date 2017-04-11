/**
 * A function mostly used with [extract](https://www.npmjs.com/package/geodash-extract).
 * Expand can expand an arbitrary array of period-separated keychains and
 * create a unified array of 1 element per key.
 *
 * @function extract
 * @param {(string|string[]|int[]|Object[])} keyChain - The arbitrary key chain that cna be a string or array of primitives.
 * @return the unified array of keys aka key chain
 *
 * @example <caption>Basic</caption>
 * var a = ["featurelayers"];
 * var b = expand(a.concat([0, "popup.panes", 2]));
 * // b == ["featurelayers", 0, "popup", "panes", 2]
 * var pane = extract(b, dashbaord);
 *
 */

module.exports = function(keyChain)
{
  var newArray = [];
  if(Array.isArray(keyChain))
  {
    for(var i = 0; i < keyChain.length; i++)
    {
      var value = keyChain[i];
      if(typeof value === 'string')
      {
        if(value.indexOf(".") != -1)
        {
          newArray = newArray.concat(value.split("."));
        }
        else
        {
          newArray.push(value);
        }
      }
      else
      {
        newArray.push(value);
      }
    }
  }
  else if(typeof keyChain === 'string')
  {
    newArray = keyChain.split(".");
  }
  return newArray;
};
