public class hw1 {
    public static StringBuilder answer(String QUERY, String PARAMS) {
        StringBuilder whereClause = new StringBuilder();
    
        // Split the PARAMS string into key-value pairs
        String[] paramsArray = PARAMS.split(", ");
    
        // Iterate over the key-value pairs
        for (String param : paramsArray) {
            // Split each key-value pair into key and value
            String[] keyValue = param.split(":");
            String key = keyValue[0].replaceAll("[{}\"]", "").trim();
            String value = keyValue[1].replaceAll("[{}\"]", "").trim();
    
            // Check if the value is not null
            if (!value.equals("null")) {
                // Append the parameter to the WHERE clause
                whereClause.append(key).append(" = '").append(value).append("' AND ");
            }
        }
    
        // Remove the trailing "AND" from the WHERE clause
        if (whereClause.length() > 0) {
            whereClause.setLength(whereClause.length() - 5);
        }
    
        // Combine the QUERY and WHERE clause to form the complete SQL query
        StringBuilder sqlQuery = new StringBuilder(QUERY);
        sqlQuery.append(whereClause.toString());
    
        return sqlQuery;
    }
    public static void main(String[] args) {
    String QUERY = "";
    String PARAMS = "";
    
    if (args.length == 0) {
        // When submitting code for Execution, you can vary these parameters
        QUERY = "select * from students where ";
        PARAMS = "{\"name\":\"Ivanov\", \"country\":\"Russia\", \"city\":\"Moscow\", \"age\":\"null\"}";
        } else {
            QUERY = args[0];
            PARAMS = args[1];
        }
    
        hw1 ans = new hw1();
        System.out.println(ans.answer(QUERY, PARAMS));
    }
}
