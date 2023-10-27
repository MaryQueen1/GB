// public class hw4 {
//     public static StringBuilder answer(String QUERY, String PARAMS) {
//         StringBuilder whereClause = new StringBuilder();
    
//         String[] paramsArray = PARAMS.split(", ");
    
//         for (String param : paramsArray) {
//             String[] keyValue = param.split(":");
//             String key = keyValue[0].replaceAll("[{}\"]", "").trim();
//             String value = keyValue[1].replaceAll("[{}\"]", "").trim();
    
//             if (!value.equals("null")) {
//                 whereClause.append(key).append(" = '").append(value).append("' AND ");
//             }
//         }
    
//         if (whereClause.length() > 0) {
//             whereClause.setLength(whereClause.length() - 5);
//         }
    
//         StringBuilder sqlQuery = new StringBuilder(QUERY);
//         sqlQuery.append(whereClause.toString());
    
//         return sqlQuery;
//     }
//     public static void main(String[] args) {
//     String QUERY = "";
//     String PARAMS = "";
    
//     if (args.length == 0) {
//         QUERY = "select * from students where ";
//         PARAMS = "{\"name\":\"Ivanov\", \"country\":\"Russia\", \"city\":\"Moscow\", \"age\":\"null\"}";
//         } else {
//             QUERY = args[0];
//             PARAMS = args[1];
//         }
    
//         hw4 ans = new hw4();
//         System.out.println(ans.answer(QUERY, PARAMS));
//     }
// }
